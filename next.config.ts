import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['limiarcore.com', '*.limiarcore.com'],
  // Produces a minimal, self-contained server build (.next/standalone)
  // so the Docker image only ships the runtime files it needs.
  output: "standalone",
};

export default nextConfig;
