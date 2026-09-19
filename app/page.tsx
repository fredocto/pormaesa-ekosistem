import Link from 'next/link'
import Image from 'next/image'
import { COLORS } from './colors'

export default function HomeBridge() {
  return (
    <div style={{ backgroundColor: COLORS.bgBody, color: COLORS.textBody, minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* Header / Navbar */}
      <header style={{ background: COLORS.primary, color: '#fff', padding: '12px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        
        {/* Brand & Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Image 
            src="/logo.png" 
            alt="Logo POR MAESA" 
            width={40} 
            height={40} 
            style={{ objectFit: 'contain' }}
          />
          <h2 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', letterSpacing: '0.5px' }}>
            MAESA OICO BRIDGE
          </h2>
        </div>
        
        {/* Navigasi Login & Sign Up */}
        <nav style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Link href="/register" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold', marginRight: '10px' }}>
            Daftar Event
          </Link>
          
          <button 
            type="button" 
            style={{
              background: 'transparent',
              border: '1px solid #fff',
              color: '#fff',
              padding: '6px 16px',
              borderRadius: '6px',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            Login
          </button>

          <button 
            type="button" 
            style={{
              background: COLORS.accentGold,
              border: 'none',
              color: '#0F172A',
              padding: '6px 16px',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            Sign Up
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{ textAlign: 'center', padding: '60px 20px', maxWidth: '850px', margin: '0 auto' }}>
        
        {/* Title 3 Baris */}
        <h1 style={{ fontSize: '42px', marginTop: '10px', color: COLORS.textHeading, fontWeight: '800', lineHeight: '1.25', textTransform: 'uppercase', letterSpacing: '1px' }}>
          KEJUARAAN<br />
          BRIDGE PASANGAN<br />
          POR MAESA
        </h1>

        {/* Tanggal & Venue */}
        <div style={{ marginTop: '24px', marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'center' }}>
          <span style={{ background: '#FEF3C7', color: '#B45309', padding: '8px 18px', borderRadius: '20px', fontSize: '15px', fontWeight: 'bold', border: '1px solid #FDE68A', display: 'inline-block' }}>
            MINGGU, 18 OKTOBER 2026
          </span>
          <p style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: COLORS.textBody }}>
            Hall Mega Bekasi Hypermall-Lantai 3
          </p>
          <p style={{ margin: 0, fontSize: '15px', color: COLORS.textMuted }}>
            Bekasi
          </p>
        </div>
        
        <p style={{ fontSize: '18px', color: COLORS.textMuted, lineHeight: '1.6', marginTop: '20px' }}>
          Bertanding Bersilaturahmi Mempererat Keluarga Besar POR MAESA.<br />
          <em>Bridge More Than a Game, A Lifelong Friendship!</em>
        </p>

        {/* Total Hadiah Card */}
        <div style={{ background: COLORS.bgCard, padding: '24px', borderRadius: '16px', border: `1px solid ${COLORS.border}`, margin: '32px auto', maxWidth: '380px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
          <p style={{ margin: 0, fontSize: '13px', color: COLORS.textMuted, fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>TOTAL HADIAH</p>
          <p style={{ margin: '6px 0 0 0', fontSize: '36px', fontWeight: 'bold', color: COLORS.primary }}>Rp 12.000.000</p>
        </div>

        <Link
          href="/register"
          style={{
            display: 'inline-block',
            padding: '16px 36px',
            background: `linear-gradient(135deg, ${COLORS.primary} 0%, #10B981 100%)`,
            color: '#fff',
            borderRadius: '10px',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: 'bold',
            boxShadow: '0 10px 20px -5px rgba(13, 138, 67, 0.4)',
          }}
        >
          Daftar Sekarang
        </Link>
      </section>

      {/* Rincian Kategori Biaya */}
      <section style={{ maxWidth: '900px', margin: '0 auto 50px auto', padding: '0 20px' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '24px', color: COLORS.textHeading, fontSize: '22px' }}>
          Biaya Pendaftaran (Early Bird s/d 2 Okt 2026)
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          <div style={{ background: COLORS.bgCard, padding: '24px', borderRadius: '12px', border: `1px solid ${COLORS.border}`, boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
            <h4 style={{ margin: '0 0 8px 0', color: COLORS.textBody }}>Senior / Ladies / Mixed</h4>
            <p style={{ fontSize: '22px', fontWeight: 'bold', color: COLORS.primary, margin: 0 }}>
              Rp 200.000 <span style={{ fontSize: '12px', color: COLORS.textMuted, fontWeight: 'normal' }}>/ pasangan</span>
            </p>
          </div>

          <div style={{ background: COLORS.bgCard, padding: '24px', borderRadius: '12px', border: `1px solid ${COLORS.border}`, boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
            <h4 style={{ margin: '0 0 8px 0', color: COLORS.textBody }}>Junior U26</h4>
            <p style={{ fontSize: '22px', fontWeight: 'bold', color: COLORS.primary, margin: 0 }}>
              Rp 100.000 <span style={{ fontSize: '12px', color: COLORS.textMuted, fontWeight: 'normal' }}>/ pasangan</span>
            </p>
          </div>

          <div style={{ background: COLORS.bgCard, padding: '24px', borderRadius: '12px', border: `1px solid ${COLORS.border}`, boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
            <h4 style={{ margin: '0 0 8px 0', color: COLORS.textBody }}>Pelajar</h4>
            <p style={{ fontSize: '22px', fontWeight: 'bold', color: '#16A34A', margin: 0 }}>GRATIS</p>
          </div>
        </div>
      </section>

      {/* Section: HADIAH & PENGHARGAAN */}
      <section style={{ maxWidth: '900px', margin: '0 auto 60px auto', padding: '0 20px' }}>
        <div style={{ background: '#F0FDF4', borderRadius: '16px', padding: '36px', border: '1px solid #BBF7D0', boxShadow: '0 4px 6px -1px rgba(13, 138, 67, 0.05)' }}>
          <h3 style={{ textAlign: 'center', margin: '0 0 8px 0', color: COLORS.textHeading, fontSize: '24px', fontWeight: 'bold' }}>
            HADIAH & PENGHARGAAN
          </h3>
          <p style={{ textAlign: 'center', color: COLORS.textMuted, fontSize: '14px', marginBottom: '28px' }}>
            Piala & Tabungan untuk Pemenang Sesuai Kategori
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            {/* Kartu Hadiah Umum / Utama */}
            <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '12px', border: '1px solid #86EFAC' }}>
              <h4 style={{ color: COLORS.primary, margin: '0 0 10px 0', fontSize: '16px' }}>Kategori Utama / Umum</h4>
              <ul style={{ margin: 0, paddingLeft: '20px', color: COLORS.textBody, fontSize: '14px', lineHeight: '1.8' }}>
                <li>Juara I : Tabungan + Piala</li>
                <li>Juara II : Tabungan + Piala</li>
                <li>Juara III : Tabungan + Piala</li>
                <li>Peringkat IV – X : Tabungan</li>
              </ul>
            </div>

            {/* Kartu Hadiah Khusus Kategori */}
            <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '12px', border: '1px solid #86EFAC' }}>
              <h4 style={{ color: COLORS.primary, margin: '0 0 10px 0', fontSize: '16px' }}>Kategori Khusus</h4>
              <ul style={{ margin: 0, paddingLeft: '20px', color: COLORS.textBody, fontSize: '14px', lineHeight: '1.8' }}>
                <li>Best Senior : Tabungan</li>
                <li>Best Ladies : Tabungan</li>
                <li>Best Mixed : Tabungan</li>
                <li>Best Junior U26 : Tabungan</li>
                <li>Best Pelajar : Tabungan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer & Kontak Informasi */}
      <footer style={{ background: '#FFFFFF', borderTop: `1px solid ${COLORS.border}`, padding: '40px 20px 24px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h4 style={{ margin: '0 0 12px 0', color: COLORS.textHeading, fontSize: '16px', fontWeight: 'bold' }}>
            INFORMASI LEBIH LENGKAP:
          </h4>

          {/* Tombol Kontak WhatsApp Ibu Agustina */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
            <a 
              href="https://wa.me/628161436051" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: '#25D366',
                color: '#FFFFFF',
                padding: '12px 24px',
                borderRadius: '10px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '16px',
                boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)',
              }}
            >
              💬 <strong>Agustina D. Awuy B. — 08161436051</strong>
            </a>
          </div>

          <div style={{ borderTop: `1px solid ${COLORS.border}`, paddingTop: '20px', color: COLORS.textMuted, fontSize: '14px' }}>
            © 2026 POR MAESA
          </div>
        </div>
      </footer>
    </div>
  )
}