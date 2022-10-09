/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.vox-cdn.com"]
  },
  swcMinify: true,
}

module.exports = nextConfig
