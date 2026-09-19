import { NextResponse } from 'next/server'
// @ts-ignore
import Midtrans from 'midtrans-client'

const snap = new Midtrans.Snap({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY || 'SB-Mid-server-DUMMY',
  clientKey: process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY || 'SB-Mid-client-DUMMY',
})

export async function POST(request: Request) {
  try {
    const { nama1, email, phone, nama2, kategori, totalBayar } = await request.json()

    const orderId = `BRIDGE-${Date.now()}`

    const parameter = {
      transaction_details: {
        order_id: orderId,
        gross_amount: totalBayar,
      },
      customer_details: {
        first_name: nama1,
        email: email,
        phone: phone,
      },
      item_details: [
        {
          id: kategori,
          price: totalBayar,
          quantity: 1,
          name: `Pendaftaran Bridge: ${kategori} (${nama1} & ${nama2})`,
        },
      ],
    }

    const token = await snap.createTransactionToken(parameter)
    return NextResponse.json({ token, orderId })
  } catch (error: any) {
    console.error('Error Midtrans Token:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}