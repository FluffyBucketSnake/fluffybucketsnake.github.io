/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: ["@svgr/webpack"],
    });
    config.module.rules.push({
      test: /\.(?:vert|frag)$/i,
      type: "asset/source",
    });
    return config;
  },
};

module.exports = nextConfig;
