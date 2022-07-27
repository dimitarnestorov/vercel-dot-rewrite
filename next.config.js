/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/./hello",
        destination: "/api/hello",
      },
    ]
  },
}

module.exports = nextConfig
