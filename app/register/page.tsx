'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { COLORS } from '../colors'

declare global {
  interface Window {
    snap: any
  }
}

export default function RegisterBridgePage() {
  const [formData, setFormData] = useState({
    nama1: '',
    email: '',
    phone: '',
    nama2: '',
    kategori: 'Senior',
  })

  const [loading, setLoading] = useState(false)

  const getBiaya = (kategori: string) => {
    switch (kategori) {
      case 'Senior':
      case 'Ladies':
      case 'Mixed':
        return 200000
      case 'Junior U26':
        return 100000
      case 'Pelajar':
        return 0
      default:
        return 200000
    }
  }

  const nominalBiaya = getBiaya(formData.kategori)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Jika Kategori Pelajar (Gratis)
    if (nominalBiaya === 0) {
      alert('Pendaftaran Kategori Pelajar Berhasil (GRATIS)! Silakan cek email Anda.')
      setLoading(false)
      return
    }

    try {
      const res = await fetch('/api/tokenizer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, totalBayar: nominalBiaya }),
      })

      const data = await res.json()

      if (data.token && window.snap) {
        // Buka Pop-up Midtrans Snap secara langsung
        window.snap.pay(data.token, {
          onSuccess: function (result: any) {
            alert('Pembayaran Berhasil! E-Tiket akan segera dikirim.')
            console.log(result)
          },
          onPending: function (result: any) {
            alert('Menunggu pembayaran Anda. Silakan selesaikan instruksi pembayaran.')
            console.log(result)
          },
          onError: function (result: any) {
            alert('Pembayaran gagal. Silakan coba lagi.')
            console.log(result)
          },
          onClose: function () {
            alert('Anda menutup halaman pembayaran sebelum selesai.')
          },
        })
      } else {
        alert('Gagal memuat sistem pembayaran Midtrans. Pastikan Server Key Midtrans sudah diatur.')
      }
    } catch (err) {
      console.error(err)
      alert('Terjadi kesalahan koneksi ke gateway pembayaran.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ backgroundColor: COLORS.bgBody, minHeight: '100vh', fontFamily: 'sans-serif', color: COLORS.textBody }}>
      {/* Header */}
      <header style={{ background: COLORS.primary, color: '#fff', padding: '12px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Image 
            src="/logo.png" 
            alt="Logo POR MAESA" 
            width={36} 
            height={36} 
            style={{ objectFit: 'contain' }}
          />
          <span>← MAESA OICO BRIDGE</span>
        </Link>
        
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            type="button" 
            style={{ background: 'transparent', border: '1px solid #fff', color: '#fff', padding: '5px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '13px' }}
          >
            Login
          </button>
          <button 
            type="button" 
            style={{ background: COLORS.accentGold, border: 'none', color: '#0F172A', padding: '5px 12px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '13px' }}
          >
            Sign Up
          </button>
        </div>
      </header>

      {/* Main Form Container */}
      <main style={{ maxWidth: '550px', margin: '40px auto', padding: '0 20px' }}>
        <div style={{ background: '#F0FDF4', borderRadius: '16px', padding: '36px', boxShadow: '0 10px 25px -5px rgba(13, 138, 67, 0.1)', border: '1px solid #BBF7D0' }}>
          
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: COLORS.textHeading, marginBottom: '8px', textAlign: 'center' }}>
            Pendaftaran Kejuaraan Bridge
          </h2>
          <p style={{ fontSize: '14px', color: COLORS.textMuted, textAlign: 'center', marginBottom: '28px' }}>
            Isi data pasangan bertanding Anda untuk registrasi event.
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Nama Pemain 1 */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '6px', color: COLORS.textHeading }}>
                Nama Lengkap (Pemain 1) *
              </label>
              <input
                type="text"
                required
                placeholder="Contoh: Budi Santoso"
                value={formData.nama1}
                onChange={(e) => setFormData({ ...formData, nama1: e.target.value })}
                style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #86EFAC', backgroundColor: '#FFFFFF', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            {/* Email */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '6px', color: COLORS.textHeading }}>
                Email (untuk pengiriman E-Tiket) *
              </label>
              <input
                type="email"
                required
                placeholder="email@domain.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #86EFAC', backgroundColor: '#FFFFFF', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            {/* No WhatsApp */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '6px', color: COLORS.textHeading }}>
                No. WhatsApp / HP *
              </label>
              <input
                type="tel"
                required
                placeholder="081234567890"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #86EFAC', backgroundColor: '#FFFFFF', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            {/* Nama Pemain 2 */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '6px', color: COLORS.textHeading }}>
                Nama Pasangan (Pemain 2) *
              </label>
              <input
                type="text"
                required
                placeholder="Contoh: Ahmad Hidayat"
                value={formData.nama2}
                onChange={(e) => setFormData({ ...formData, nama2: e.target.value })}
                style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #86EFAC', backgroundColor: '#FFFFFF', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            {/* Kategori Lomba */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '6px', color: COLORS.textHeading }}>
                Kategori Lomba *
              </label>
              <select
                value={formData.kategori}
                onChange={(e) => setFormData({ ...formData, kategori: e.target.value })}
                style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #86EFAC', backgroundColor: '#FFFFFF', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }}
              >
                <option value="Senior">Senior — Rp 200.000 / pasangan</option>
                <option value="Ladies">Ladies — Rp 200.000 / pasangan</option>
                <option value="Mixed">Mixed — Rp 200.000 / pasangan</option>
                <option value="Junior U26">Junior U26 — Rp 100.000 / pasangan</option>
                <option value="Pelajar">Pelajar — GRATIS</option>
              </select>
            </div>

            {/* Ringkasan Biaya */}
            <div style={{ background: '#FFFFFF', padding: '16px', borderRadius: '8px', border: '1px solid #86EFAC', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '14px', fontWeight: '600', color: COLORS.textMuted }}>Total Biaya Pendaftaran:</span>
              <span style={{ fontSize: '18px', fontWeight: 'bold', color: nominalBiaya === 0 ? '#16A34A' : COLORS.primary }}>
                {nominalBiaya === 0 ? 'GRATIS' : `Rp ${nominalBiaya.toLocaleString('id-ID')}`}
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              style={{
                marginTop: '8px',
                padding: '14px',
                background: `linear-gradient(135deg, ${COLORS.primary} 0%, #10B981 100%)`,
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: loading ? 'not-allowed' : 'pointer',
                boxShadow: '0 4px 12px rgba(13, 138, 67, 0.3)',
              }}
            >
              {loading ? 'Memproses...' : nominalBiaya === 0 ? 'Daftar Sekarang' : 'Lanjut ke Pembayaran'}
            </button>

          </form>
        </div>
      </main>
    </div>
  )
}