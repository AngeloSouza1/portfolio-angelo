/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  // Para que o site seja servido em:
  // https://AngeloSouza1.github.io/portfolio-angelo/
  basePath: '/portfolio-angelo',
  assetPrefix: '/portfolio-angelo/',
};

module.exports = nextConfig;

