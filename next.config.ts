import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: {
    appIsrStatus: false,
  },
  images: {
    remotePatterns: [
      {
        hostname: "api.dicebear.com",
      },
    ],
  },
};

export default nextConfig;
