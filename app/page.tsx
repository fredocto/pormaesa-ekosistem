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
            Hall Mega Bekasi Hypermall – Lantai 3
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

      {/* Section: HADIAH DAN PENGHARGAAN (Persis Flyer) */}
      <section style={{ maxWidth: '900px', margin: '0 auto 60px auto', padding: '0 20px' }}>
        <div style={{ background: '#F0FDF4', borderRadius: '16px', padding: '32px', border: '1px solid #BBF7D0', boxShadow: '0 4px 6px -1px rgba(13, 138, 67, 0.05)', textAlign: 'center' }}>
          
          <h3 style={{ margin: '0 0 20px 0', color: COLORS.textHeading, fontSize: '22px', fontWeight: 'bold', textTransform: 'uppercase' }}>
            HADIAH DAN PENGHARGAAN
          </h3>

          <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '12px', border: '1px solid #86EFAC', maxWidth: '450px', margin: '0 auto' }}>
            <p style={{ fontSize: '24px', fontWeight: '800', color: COLORS.textHeading, margin: '0 0 16px 0' }}>
              🏆 JUARA 1 – 6
            </p>

            <div style={{ borderTop: '1px dashed #BBF7D0', paddingTop: '16px' }}>
              <p style={{ fontWeight: 'bold', color: COLORS.primary, margin: '0 0 10px 0', fontSize: '15px' }}>
                Kategori Khusus:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: COLORS.textBody, fontSize: '15px', lineHeight: '2', textAlign: 'center' }}>
                <li>⭐ Best Senior</li>
                <li>⭐ Best Ladies</li>
                <li>⭐ Best Mixed</li>
                <li>⭐ Best Junior U26</li>
                <li>⭐ Best Pelajar</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Footer Dark Green (#054B23) & Kontak WA */}
      <footer style={{ background: '#054B23', color: '#FFFFFF', padding: '40px 20px 24px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          
          {/* Teks Informasi & Pendaftaran (Biasa, Tidak Bold) */}
          <p style={{ margin: '0 0 12px 0', fontSize: '15px', color: '#E2E8F0', opacity: 0.9 }}>
            Informasi & Pendaftaran:
          </p>

          {/* Nama & Nomor WA dengan Logo /public/logo-wa.png */}
          <div style={{ marginBottom: '32px' }}>
            <a 
              href="https://wa.me/628161436051" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                color: '#FFFFFF',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: 'bold',
              }}
            >
              <Image 
                src="/logo-wa.png" 
                alt="Logo WhatsApp" 
                width={28} 
                height={28} 
                style={{ objectFit: 'contain' }}
              />
              <span>Agustina D. Awuy B. — 08161436051</span>
            </a>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '20px', color: '#A7F3D0', fontSize: '14px' }}>
            © 2026 POR MAESA
          </div>
        </div>
      </footer>
    </div>
  )
}