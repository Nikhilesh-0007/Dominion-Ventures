/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Allow easy deployment without special image optimization servers
  },
}

module.exports = nextConfig
