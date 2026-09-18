'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'

declare global {
  interface Window {
    snap: any
  }
}

export default function RegisterBridgePage() {
  const supabase = createClient()

  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    namaLengkap: '',
    email: '',
    noHp: '',
    kategori: 'Umum',
    namaPasangan: '',
  })

  // Script Midtrans Snap Pop-up
  useEffect(() => {
    const snapScriptUrl = 'https://app.sandbox.midtrans.com/snap/snap.js'
    const clientKey = process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY || ''

    const script = document.createElement('script')
    script.src = snapScriptUrl
    script.setAttribute('data-client-key', clientKey)
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const getHarga = (kategori: string) => {
    switch (kategori) {
      case 'Umum':
        return 200000
      case 'Junior U26':
        return 100000
      case 'Pelajar':
        return 0
      default:
        return 200000
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const harga = getHarga(formData.kategori)
      const orderId = `BRIDGE-${Date.now()}`
      const qrCodeToken = `QR-${Math.random().toString(36).substring(2, 9).toUpperCase()}`

      // 1. Simpan Pendaftaran ke Database Supabase
      const { data: eventData } = await supabase
        .from('events')
        .select('id')
        .limit(1)
        .single()

      const { error: dbError } = await supabase.from('pendaftaran_event').insert({
        event_id: eventData?.id || null,
        order_id: orderId,
        kategori_lomba: formData.kategori,
        status_pembayaran: harga === 0 ? 'paid' : 'pending',
        qr_code_token: qrCodeToken,
        additional_data: {
          nama_lengkap: formData.namaLengkap,
          email: formData.email,
          no_hp: formData.noHp,
          nama_pasangan: formData.namaPasangan,
        },
      })

      if (dbError) throw dbError

      
      // 2. Jika Gratis (Pelajar), langsung redirect ke E-Tiket
if (harga === 0) {
  alert('Pendaftaran Berhasil! Kategori Pelajar Gratis.')
  window.location.href = `/ticket/${orderId}`
  return
}

      // 3. Jika Berbayar, Minta Token ke Midtrans
      const res = await fetch('/api/tokenizer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderId,
          grossAmount: harga,
          namaLengkap: formData.namaLengkap,
          email: formData.email,
          noHp: formData.noHp,
          kategori: formData.kategori,
        }),
      })

      const tokenData = await res.json()

      if (tokenData.error) {
        alert(tokenData.error)
        setLoading(false)
        return
      }

      // 4. Buka Pop-up Pembayaran Midtrans Snap
      // Ganti alert bawaan dengan redirect otomatis ke halaman e-tiket
window.snap.pay(tokenData.token, {
  onSuccess: function (result: any) {
    window.location.href = `/ticket/${orderId}`
  },
  onPending: function (result: any) {
    window.location.href = `/ticket/${orderId}`
  },
  onError: function (result: any) {
    alert('Pembayaran gagal, silakan coba lagi.')
  },
  onClose: function () {
    // Jika popup ditutup, tetap arahkan ke tiket agar bisa melakukan bayar ulang
    window.location.href = `/ticket/${orderId}`
  },
})
    } catch (err: any) {
      alert(`Terjadi kesalahan: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Pendaftaran Kejuaraan Bridge Pasangan POR MAESA 2026</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label>Nama Lengkap (Pemain 1):</label>
          <input
            type="text"
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            value={formData.namaLengkap}
            onChange={(e) => setFormData({ ...formData, namaLengkap: e.target.value })}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div>
          <label>No. WhatsApp / HP:</label>
          <input
            type="tel"
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            value={formData.noHp}
            onChange={(e) => setFormData({ ...formData, noHp: e.target.value })}
          />
        </div>

        <div>
          <label>Nama Pasangan (Pemain 2):</label>
          <input
            type="text"
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            value={formData.namaPasangan}
            onChange={(e) => setFormData({ ...formData, namaPasangan: e.target.value })}
          />
        </div>

        <div>
          <label>Kategori Lomba:</label>
          <select
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            value={formData.kategori}
            onChange={(e) => setFormData({ ...formData, kategori: e.target.value })}
          >
            <option value="Umum">Umum - Rp 200.000 / pasangan</option>
            <option value="Junior U26">Junior U26 - Rp 100.000 / pasangan</option>
            <option value="Pelajar">Pelajar - GRATIS</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '12px',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          {loading ? 'Memproses...' : 'Lanjut ke Pembayaran'}
        </button>
      </form>
    </div>
  )
}