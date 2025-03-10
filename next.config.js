/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['images.unsplash.com', 'http://localhost:3000', 'https://www.gstatic.com'],
  },
};
// https://www.gstatic.com
module.exports = nextConfig;
