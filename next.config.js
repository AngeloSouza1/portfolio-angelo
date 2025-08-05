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
  // Se você for usar um subdomínio do GitHub Pages (username.github.io/repo-name)
  // descomente e ajuste a linha abaixo:
   basePath: '/portfolio-angelo.git',
   assetPrefix: 'portfolio-angelo.git/',
}

module.exports = nextConfig
