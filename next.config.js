/**
 * GitHub Pages repository path desteği.
 * GH_PAGES=1 ortamı ile build alındığında basePath/assetPrefix /bologlu.com olur
 * (https://ozata-apps.github.io/bologlu.com/).
 * Local development ve custom domain (bologlu.com) için varsayılan davranış
 * prefix'sizdir — yani mevcut yapı geri alınabilir şekilde korunur.
 */
const isGHPages = process.env.GH_PAGES === "1";
const BASE_PATH = isGHPages ? "/bologlu.com" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: BASE_PATH,
  assetPrefix: BASE_PATH,
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
