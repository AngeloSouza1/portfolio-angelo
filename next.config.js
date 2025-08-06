/** @type {import('next').NextConfig} */
const nextConfig = {
  // Mantém o output “export” para gerar a pasta out/,
  // mas COMO VOCÊ TEM rotas em API, precisamos habilitar o modo híbrido:
  // - output: 'export' faz a exportação estática
  // - trailingSlash garante URLs com “/”
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

  // Para servir em: https://AngeloSouza1.github.io/portfolio-angelo/
  basePath: "/portfolio-angelo",
  assetPrefix: "/portfolio-angelo/",

  // Expõe no cliente
  env: {
    NEXT_PUBLIC_BASE_PATH: "/portfolio-angelo",
  },
};

module.exports = nextConfig;

