'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { COLORS } from '../colors'

export default function RegisterBridgePage() {
  const [formData, setFormData] = useState({
    nama1: '',
    email: '',
    phone: '',
    nama2: '',
    kategori: 'Umum - Rp 200.000 / pasangan',
  })

  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    console.log('Data pendaftaran:', formData)
  }

  return (
    <div style={{ backgroundColor: COLORS.bgBody, minHeight: '100vh', fontFamily: 'sans-serif', color: COLORS.textBody }}>
      {/* Header */}
      <header style={{ background: COLORS.primary, color: '#fff', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px' }}>
          ← POR MAESA BRIDGE
        </Link>
        
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            type="button" 
            onClick={() => alert('Fitur Login akan segera hadir!')}
            style={{ background: 'transparent', border: '1px solid #fff', color: '#fff', padding: '5px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '13px' }}
          >
            Login
          </button>
          <button 
            type="button" 
            onClick={() => alert('Fitur Sign Up akan segera hadir!')}
            style={{ background: COLORS.accentGold, border: 'none', color: '#0F172A', padding: '5px 12px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '13px' }}
          >
            Sign Up
          </button>
        </div>
      </header>

      {/* Main Form Container */}
      <main style={{ maxWidth: '550px', margin: '40px auto', padding: '0 20px' }}>
        {/* Card dengan Background Hijau Muda Soft (#F0FDF4) */}
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
                <option value="Umum - Rp 200.000 / pasangan">Umum — Rp 200.000 / pasangan</option>
                <option value="Junior U26 - Rp 100.000 / pasangan">Junior U26 — Rp 100.000 / pasangan</option>
                <option value="Pelajar - Gratis">Pelajar — GRATIS</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              style={{
                marginTop: '12px',
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
              {loading ? 'Memproses...' : 'Lanjut ke Pembayaran'}
            </button>

          </form>
        </div>
      </main>
    </div>
  )
}