'use client'

import React, { useState } from 'react'
import Link from 'next/link'

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
    // Alur pembayaran / integrasi Midtrans di sini
    console.log('Data pendaftaran:', formData)
  }

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'sans-serif', color: '#1e293b' }}>
      {/* Header */}
      <header style={{ background: '#0284c7', color: '#fff', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px' }}>
          ← POR MAESA BRIDGE
        </Link>
        <span style={{ fontSize: '14px', opacity: 0.9 }}>Form Pendaftaran</span>
      </header>

      {/* Main Form Container */}
      <main style={{ maxWidth: '550px', margin: '40px auto', padding: '0 20px' }}>
        <div style={{ background: '#fff', borderRadius: '12px', padding: '32px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', border: '1px solid #e2e8f0' }}>
          
          <h2 style={{ fontSize: '22px', fontWeight: 'bold', color: '#0f172a', marginBottom: '8px', textAlign: 'center' }}>
            Pendaftaran Kejuaraan Bridge
          </h2>
          <p style={{ fontSize: '14px', color: '#64748b', textAlign: 'center', marginBottom: '28px' }}>
            Isi data pasangan bertanding Anda dengan benar.
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Nama Pemain 1 */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '6px', color: '#334155' }}>
                Nama Lengkap (Pemain 1) *
              </label>
              <input
                type="text"
                required
                placeholder="Contoh: Budi Santoso"
                value={formData.nama1}
                onChange={(e) => setFormData({ ...formData, nama1: e.target.value })}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            {/* Email */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '6px', color: '#334155' }}>
                Email (untuk pengiriman E-Tiket) *
              </label>
              <input
                type="email"
                required
                placeholder="email@domain.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            {/* No WhatsApp */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '6px', color: '#334155' }}>
                No. WhatsApp / HP *
              </label>
              <input
                type="tel"
                required
                placeholder="081234567890"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            {/* Nama Pemain 2 */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '6px', color: '#334155' }}>
                Nama Pasangan (Pemain 2) *
              </label>
              <input
                type="text"
                required
                placeholder="Contoh: Ahmad Hidayat"
                value={formData.nama2}
                onChange={(e) => setFormData({ ...formData, nama2: e.target.value })}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            {/* Kategori Lomba */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '6px', color: '#334155' }}>
                Kategori Lomba *
              </label>
              <select
                value={formData.kategori}
                onChange={(e) => setFormData({ ...formData, kategori: e.target.value })}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '15px', outline: 'none', backgroundColor: '#fff', boxSizing: 'border-box' }}
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
                marginTop: '10px',
                padding: '14px',
                backgroundColor: '#0284c7',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: loading ? 'not-allowed' : 'pointer',
                boxShadow: '0 4px 6px -1px rgba(2, 132, 199, 0.4)',
                transition: 'background-color 0.2s',
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