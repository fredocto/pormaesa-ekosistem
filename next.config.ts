import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'bridge.pormaesa.my.id',
          },
        ],
        destination: '/:path*',
      },
    ]
  },
}

export default nextConfig