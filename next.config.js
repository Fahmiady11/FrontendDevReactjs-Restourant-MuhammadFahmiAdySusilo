/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "blue.kumparan.com",
      "media-cdn.yummyadvisor.com",
      "www.trivafood.com",
      "assets.ayobandung.com",
      "asset.kompas.com",
      "assets-pergikuliner.com",
      "awsimages.detik.net.id",
      "2.bp.blogspot.com",
    ],
  },
};

module.exports = nextConfig;
