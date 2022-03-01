/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: process.env.NODE_ENV == "production" ? [] : ["picsum.photos"],
  },
};

module.exports = nextConfig;
