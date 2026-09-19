import Link from 'next/link'
import { COLORS } from './colors'

export default function HomeBridge() {
  return (
    <div style={{ backgroundColor: COLORS.bgBody, color: COLORS.textBody, minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* Header / Navbar */}
      <header style={{ background: COLORS.primary, color: '#fff', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold', letterSpacing: '0.5px' }}>POR MAESA BRIDGE</h2>
        
        {/* Navigasi Login & Sign Up (Belum Aktif) */}
        <nav style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Link href="/register" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold', marginRight: '10px' }}>
            Daftar Event
          </Link>
          
          {/* Tombol Login */}
          <button 
            type="button" 
            onClick={() => alert('Fitur Login akan segera hadir!')}
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

          {/* Tombol Sign Up */}
          <button 
            type="button" 
            onClick={() => alert('Fitur Sign Up akan segera hadir!')}
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
        <span style={{ background: '#FEF3C7', color: '#B45309', padding: '8px 16px', borderRadius: '20px', fontSize: '14px', fontWeight: 'bold', border: '1px solid #FDE68A' }}>
          Minggu, 18 Oktober 2026 • Mega Bekasi Hypermall
        </span>

        <h1 style={{ fontSize: '38px', marginTop: '24px', color: COLORS.textHeading, fontWeight: '800', lineHeight: '1.2' }}>
          KEJUARAAN BRIDGE PASANGAN POR MAESA 2026
        </h1>
        
        <p style={{ fontSize: '18px', color: COLORS.textMuted, lineHeight: '1.6', marginTop: '16px' }}>
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

      {/* Rincian Kategori */}
      <section style={{ maxWidth: '900px', margin: '0 auto 60px auto', padding: '0 20px' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '24px', color: COLORS.textHeading, fontSize: '22px' }}>
          Biaya Pendaftaran (Early Bird s/d 2 Okt 2026)
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          <div style={{ background: COLORS.bgCard, padding: '24px', borderRadius: '12px', border: `1px solid ${COLORS.border}`, boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
            <h4 style={{ margin: '0 0 8px 0', color: COLORS.textBody }}>Kategori Umum</h4>
            <p style={{ fontSize: '22px', fontWeight: 'bold', color: COLORS.primary, margin: 0 }}>
              Rp 200.000 <span style={{ fontSize: '12px', color: COLORS.textMuted, fontWeight: 'normal' }}>/ pasangan</span>
            </p>
          </div>

          <div style={{ background: COLORS.bgCard, padding: '24px', borderRadius: '12px', border: `1px solid ${COLORS.border}`, boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
            <h4 style={{ margin: '0 0 8px 0', color COLORS.textBody }}>Junior U26</h4>
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

      <footer style={{ textAlign: 'center', padding: '24px', borderTop: `1px solid ${COLORS.border}`, color: COLORS.textMuted, fontSize: '14px' }}>
        © 2026 POR MAESA — Ekosistem Digital Olahraga
      </footer>
    </div>
  )
}