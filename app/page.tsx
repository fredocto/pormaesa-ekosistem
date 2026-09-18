import Link from 'next/link'

export default function HomeBridge() {
  return (
    <div style={{ fontFamily: 'sans-serif', color: '#1e293b', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      {/* Header / Navbar */}
      <header style={{ background: '#0284c7', color: '#fff', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0, fontSize: '20px' }}>POR MAESA BRIDGE</h2>
        <nav style={{ display: 'flex', gap: '15px' }}>
          <Link href="/register" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Daftar Event</Link>
          <Link href="/admin/dashboard" style={{ color: '#e0f2fe', textDecoration: 'none' }}>Dashboard Pengurus</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{ textAlign: 'center', padding: '60px 20px', maxWidth: '800px', margin: '0 auto' }}>
        <span style={{ background: '#e0f2fe', color: '#0369a1', padding: '6px 12px', borderRadius: '20px', fontSize: '14px', fontWeight: 'bold' }}>
          Minggu, 18 Oktober 2026 • Mega Bekasi Hypermall
        </span>
        <h1 style={{ fontSize: '36px', marginTop: '20px', color: '#0f172a' }}>
          KEJUARAAN BRIDGE PASANGAN POR MAESA 2026
        </h1>
        <p style={{ fontSize: '18px', color: '#475569', lineHeight: '1.6' }}>
          Bertanding Bersilaturahmi Mempererat Keluarga Besar POR MAESA.
          Bridge More Than a Game, A Lifelong Friendship!
        </p>

        {/* Total Hadiah Card */}
        <div style={{ background: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', margin: '30px auto', maxWidth: '400px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
          <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>TOTAL HADIAH</p>
          <p style={{ margin: '5px 0 0 0', fontSize: '32px', fontWeight: 'bold', color: '#16a34a' }}>Rp 12.000.000</p>
        </div>

        <Link
          href="/register"
          style={{
            display: 'inline-block',
            padding: '16px 32px',
            backgroundColor: '#0284c7',
            color: '#fff',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: 'bold',
            boxShadow: '0 10px 15px -3px rgba(2, 132, 199, 0.3)',
          }}
        >
          Daftar Sekarang
        </Link>
      </section>

      {/* Rincian Kategori */}
      <section style={{ maxWidth: '900px', margin: '0 auto 60px auto', padding: '0 20px' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Biaya Pendaftaran (Early Bird s/d 2 Okt 2026)</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <h4 style={{ margin: '0 0 10px 0' }}>Kategori Umum</h4>
            <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#0284c7', margin: 0 }}>Rp 200.000 <span style={{ fontSize: '12px', color: '#94a3b8' }}>/ pasangan</span></p>
          </div>
          <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <h4 style={{ margin: '0 0 10px 0' }}>Junior U26</h4>
            <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#0284c7', margin: 0 }}>Rp 100.000 <span style={{ fontSize: '12px', color: '#94a3b8' }}>/ pasangan</span></p>
          </div>
          <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <h4 style={{ margin: '0 0 10px 0' }}>Pelajar</h4>
            <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#16a34a', margin: 0 }}>GRATIS</p>
          </div>
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: '20px', borderTop: '1px solid #e2e8f0', color: '#94a3b8', fontSize: '14px' }}>
        © 2026 POR MAESA - Ekosistem Digital Olahraga
      </footer>
    </div>
  )
}