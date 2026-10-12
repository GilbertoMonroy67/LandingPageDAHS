/** @type {import('next').NextConfig} */
const basePath = process.env.NODE_ENV === 'production' ? '/LandingPageDAHS' : '';

const nextConfig = {
  output: 'export',

  images: {
    unoptimized: true,
  },

  basePath,

  // Expone el basePath al código para construir rutas a archivos de /public
  // (<img>, <audio>, metadata), que Next no prefija automáticamente.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
