import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { orderId, grossAmount, namaLengkap, email, noHp, kategori } = await request.json()

    const serverKey = process.env.MIDTRANS_SERVER_KEY
    if (!serverKey) {
      return NextResponse.json({ error: 'Server Key Midtrans belum dikonfigurasi' }, { status: 500 })
    }

    const authString = Buffer.from(`${serverKey}:`).toString('base64')

    // Panggil Endpoint Snap Midtrans (Gunakan https://app.midtrans.com/snap/v1/transactions untuk Production)
    const response = await fetch('https://app.sandbox.midtrans.com/snap/v1/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Basic ${authString}`,
      },
      body: JSON.stringify({
        transaction_details: {
          order_id: orderId,
          gross_amount: grossAmount,
        },
        item_details: [
          {
            id: kategori,
            price: grossAmount,
            quantity: 1,
            name: `Pendaftaran Bridge - ${kategori}`,
          },
        ],
        customer_details: {
          first_name: namaLengkap,
          email: email,
          phone: noHp,
        },
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json({ error: data.error_messages || 'Gagal membuat transaksi Midtrans' }, { status: 400 })
    }

    return NextResponse.json({ token: data.token, redirect_url: data.redirect_url })
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}