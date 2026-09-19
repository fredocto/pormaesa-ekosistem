import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { nama1, email, phone, nama2, kategori, totalBayar } = await request.json()

    const orderId = `BRIDGE-${Date.now()}`
    const serverKey = process.env.MIDTRANS_SERVER_KEY || 'SB-Mid-server-DUMMY'

    // Encode Server Key ke Base64 untuk Auth Midtrans
    const authString = Buffer.from(`${serverKey}:`).toString('base64')

    const payload = {
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
          name: `Bridge: ${kategori} (${nama1} & ${nama2})`,
        },
      ],
    }

    const response = await fetch('https://app.sandbox.midtrans.com/snap/v1/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Basic ${authString}`,
      },
      body: JSON.stringify(payload),
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json({ error: data.error_messages || 'Gagal membuat transaksi' }, { status: 400 })
    }

    return NextResponse.json({ token: data.token, orderId })
  } catch (error: any) {
    console.error('Error Midtrans API:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}