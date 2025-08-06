/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removendo "output: 'export'" para habilitar rotas de API
  // output: "export",
  // trailingSlash: true,

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

  // expõe o basePath para o cliente
  env: {
    NEXT_PUBLIC_BASE_PATH: '/portfolio-angelo',
  },
};

module.exports = nextConfig;
