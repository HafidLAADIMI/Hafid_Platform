/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",//this two stars mean that we allow all domains
      },
    ],
  },
};

export default nextConfig;
