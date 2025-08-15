import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
    ],
  },
  compiler: {
    removeConsole: true,
    reactRemoveProperties: true,
    styledComponents: true,
  },
  experimental: {
    optimizeCss: true,
  },
  allowedDevOrigins: [
    'localhost', '192.168.1.34'
  ]
};

export default nextConfig;
