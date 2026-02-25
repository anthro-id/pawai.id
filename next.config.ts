import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    useLightningcss: true,
    // fallbackNodePolyfills: false
  }
};

export default nextConfig;