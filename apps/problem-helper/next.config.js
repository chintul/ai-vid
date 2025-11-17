/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@passive-income/ui",
    "@passive-income/utils",
    "@passive-income/seo",
    "@passive-income/analytics",
  ],
  experimental: {
    optimizePackageImports: ["@passive-income/ui"],
  },
};

module.exports = nextConfig;
