'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

interface Peserta {
  id: string
  order_id: string
  kategori_lomba: string
  status_pembayaran: string
  created_at: string
  additional_data: {
    nama_lengkap?: string
    email?: string
    no_hp?: string
    nama_pasangan?: string
  }
}

export default function AdminDashboardPage() {
  const supabase = createClient()
  const [pesertaList, setPesertaList] = useState<Peserta[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('pendaftaran_event')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Gagal mengambil data:', error)
    } else {
      setPesertaList(data || [])
    }
    setLoading(false)
  }

  // Hitung Statistik Ringkas
  const totalPendaftar = pesertaList.length
  const totalLunas = pesertaList.filter((p) => p.status_pembayaran === 'paid').length
  const totalPending = pesertaList.filter((p) => p.status_pembayaran === 'pending').length

  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Dashboard Pengurus - Kejuaraan Bridge 2026</h1>
      <p style={{ color: '#666' }}>Rekap data pendaftaran dan status pembayaran peserta secara real-time.</p>

      {/* Ringkasan Kartu / Cards */}
      <div style={{ display: 'flex', gap: '20px', margin: '20px 0' }}>
        <div style={{ flex: 1, padding: '15px', background: '#f4f4f5', borderRadius: '8px' }}>
          <h3>Total Pendaftar</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{totalPendaftar} Pasangan</p>
        </div>
        <div style={{ flex: 1, padding: '15px', background: '#dcfce7', borderRadius: '8px' }}>
          <h3>Lunas (Paid)</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#166534' }}>{totalLunas}</p>
        </div>
        <div style={{ flex: 1, padding: '15px', background: '#fef9c3', borderRadius: '8px' }}>
          <h3>Pending</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#854d0e' }}>{totalPending}</p>
        </div>
      </div>

      <button
        onClick={fetchData}
        style={{
          padding: '8px 16px',
          marginBottom: '15px',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Refresh Data
      </button>

      {/* Tabel Data Peserta */}
      {loading ? (
        <p>Memuat data peserta...</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f1f5f9', textAlign: 'left' }}>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Order ID</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Pemain 1</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Pemain 2 (Pasangan)</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Kontak</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Kategori</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Status Pembayaran</th>
            </tr>
          </thead>
          <tbody>
            {pesertaList.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', padding: '20px' }}>
                  Belum ada peserta mendaftar.
                </td>
              </tr>
            ) : (
              pesertaList.map((item) => (
                <tr key={item.id}>
                  <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: '13px' }}>
                    {item.order_id}
                  </td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                    {item.additional_data?.nama_lengkap || '-'}
                  </td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                    {item.additional_data?.nama_pasangan || '-'}
                  </td>
                  <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: '13px' }}>
                    {item.additional_data?.no_hp} <br />
                    <span style={{ color: '#666' }}>{item.additional_data?.email}</span>
                  </td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                    {item.kategori_lomba}
                  </td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                    <span
                      style={{
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        backgroundColor:
                          item.status_pembayaran === 'paid'
                            ? '#bbf7d0'
                            : item.status_pembayaran === 'pending'
                            ? '#fef08a'
                            : '#fecaca',
                        color:
                          item.status_pembayaran === 'paid'
                            ? '#166534'
                            : item.status_pembayaran === 'pending'
                            ? '#854d0e'
                            : '#991b1b',
                      }}
                    >
                      {item.status_pembayaran.toUpperCase()}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  )
}