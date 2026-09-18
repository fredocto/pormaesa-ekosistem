import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import crypto from 'crypto'

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.MIDTRANS_SERVER_KEY!
)

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // 1. Tangani pengujian otomatis dari tombol "Test Notification URL" di Dashboard Midtrans
    if (body.order_id && body.order_id.startsWith('test-') || body.order_id === '12345') {
      return NextResponse.json({ success: true, message: 'Test notification received' }, { status: 200 })
    }

    const {
      order_id,
      status_code,
      gross_amount,
      signature_key,
      transaction_status,
      fraud_status,
    } = body

    // 2. Verifikasi Keaslian Notifikasi Transaksi Nyata
    const serverKey = process.env.MIDTRANS_SERVER_KEY || ''
    const hash = crypto
      .createHash('sha512')
      .update(`${order_id}${status_code}${gross_amount}${serverKey}`)
      .digest('hex')

    if (hash !== signature_key) {
      return NextResponse.json({ error: 'Invalid Signature' }, { status: 400 })
    }

    // 3. Tentukan Status Pembayaran
    let statusPembayaran = 'pending'

    if (transaction_status === 'capture') {
      statusPembayaran = fraud_status === 'accept' ? 'paid' : 'challenge'
    } else if (transaction_status === 'settlement') {
      statusPembayaran = 'paid'
    } else if (
      transaction_status === 'cancel' ||
      transaction_status === 'deny' ||
      transaction_status === 'expire'
    ) {
      statusPembayaran = 'failed'
    }

    // 4. Update Status di Supabase
    const { error } = await supabaseAdmin
      .from('pendaftaran_event')
      .update({ status_pembayaran: statusPembayaran })
      .eq('order_id', order_id)

    if (error) {
      console.error('Gagal update database:', error)
      return NextResponse.json({ error: 'Database update failed' }, { status: 500 })
    }

    return NextResponse.json({ success: true, status: statusPembayaran })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}