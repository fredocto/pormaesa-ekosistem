import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'POR MAESA BRIDGE 2026',
  description: 'Website Pendaftaran Resmi Kejuaraan Bridge Pasangan POR MAESA 2026',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        {/* Midtrans Snap Sandbox Script */}
        <Script
          src="https://app.sandbox.midtrans.com/snap/snap.js"
          data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY || 'SB-Mid-client-DUMMY'}
          strategy="lazyOnload"
        />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}