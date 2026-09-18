'use client'

import { useEffect, useState, use } from 'react'
import { createClient } from '@/lib/supabase/client'
import { QRCodeSVG } from 'qrcode.react'

interface TicketData {
  order_id: string
  kategori_lomba: string
  status_pembayaran: string
  qr_code_token: string
  additional_data: {
    nama_lengkap?: string
    email?: string
    no_hp?: string
    nama_pasangan?: string
  }
}

export default function TicketPage({ params }: { params: Promise<{ orderId: string }> }) {
  const resolvedParams = use(params)
  const supabase = createClient()
  const [ticket, setTicket] = useState<TicketData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTicket = async () => {
      const { data, error } = await supabase
        .from('pendaftaran_event')
        .select('*')
        .eq('order_id', resolvedParams.orderId)
        .single()

      if (!error && data) {
        setTicket(data)
      }
      setLoading(false)
    }

    fetchTicket()
  }, [resolvedParams.orderId])

  if (loading) {
    return <p style={{ padding: '40px', textAlign: 'center' }}>Memuat E-Tiket...</p>
  }

  if (!ticket) {
    return <p style={{ padding: '40px', textAlign: 'center' }}>E-Tiket tidak ditemukan.</p>
  }

  return (
    <div style={{ maxWidth: '450px', margin: '40px auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <div
        style={{
          border: '2px dashed #0070f3',
          borderRadius: '12px',
          padding: '25px',
          textAlign: 'center',
          backgroundColor: '#fafafa',
        }}
      >
        <h2 style={{ margin: '0 0 10px 0', color: '#0070f3' }}>E-Tiket Kejuaraan Bridge 2026</h2>
        <p style={{ fontSize: '12px', color: '#666', marginBottom: '20px' }}>
          Tunjukkan QR Code ini kepada panitia saat registrasi ulang di lokasi.
        </p>

        {/* QR Code */}
        <div style={{ background: '#fff', padding: '15px', display: 'inline-block', borderRadius: '8px' }}>
          <QRCodeSVG value={ticket.qr_code_token || ticket.order_id} size={180} />
        </div>

        <div style={{ marginTop: '20px', textAlign: 'left', fontSize: '14px', lineHeight: '1.6' }}>
          <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '15px 0' }} />
          <p><strong>Order ID:</strong> {ticket.order_id}</p>
          <p><strong>Pemain 1:</strong> {ticket.additional_data?.nama_lengkap || '-'}</p>
          <p><strong>Pemain 2:</strong> {ticket.additional_data?.nama_pasangan || '-'}</p>
          <p><strong>Kategori:</strong> {ticket.kategori_lomba}</p>
          <p>
            <strong>Status Pembayaran:</strong>{' '}
            <span
              style={{
                color: ticket.status_pembayaran === 'paid' ? '#166534' : '#854d0e',
                fontWeight: 'bold',
                textTransform: 'uppercase',
              }}
            >
              {ticket.status_pembayaran}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}