import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import crypto from 'crypto'

// Gunakan Service Role / Direct Admin Client untuk mengupdate database via webhook
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.MIDTRANS_SERVER_KEY! // atau SUPABASE_SERVICE_ROLE_KEY jika ada
)

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const {
      order_id,
      status_code,
      gross_amount,
      signature_key,
      transaction_status,
      fraud_status,
    } = body

    // 1. Verifikasi Keaslian Notifikasi dari Midtrans (Signature Key Verification)
    const serverKey = process.env.MIDTRANS_SERVER_KEY || ''
    const hash = crypto
      .createHash('sha512')
      .update(`${order_id}${status_code}${gross_amount}${serverKey}`)
      .digest('hex')

    if (hash !== signature_key) {
      return NextResponse.json({ error: 'Invalid Signature' }, { status: 400 })
    }

    // 2. Tentukan Status Pembayaran Berdasarkan Notifikasi Midtrans
    let statusPembayaran = 'pending'

    if (transaction_status === 'capture') {
      if (fraud_status === 'challenge') {
        statusPembayaran = 'challenge'
      } else if (fraud_status === 'accept') {
        statusPembayaran = 'paid'
      }
    } else if (transaction_status === 'settlement') {
      statusPembayaran = 'paid'
    } else if (
      transaction_status === 'cancel' ||
      transaction_status === 'deny' ||
      transaction_status === 'expire'
    ) {
      statusPembayaran = 'failed'
    } else if (transaction_status === 'pending') {
      statusPembayaran = 'pending'
    }

    // 3. Update Status di Database Supabase
    const { error } = await supabaseAdmin
      .from('pendaftaran_event')
      .update({ status_pembayaran: statusPembayaran })
      .eq('order_id', order_id)

    if (error) {
      console.error('Gagal update status database:', error)
      return NextResponse.json({ error: 'Database update failed' }, { status: 500 })
    }

    return NextResponse.json({ success: true, status: statusPembayaran })
  } catch (err: any) {
    console.error('Webhook Error:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}