import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "prod-image-bucket.kgen.io" },
      { protocol: "https", hostname: "prod-image-bucket.indi.gg" },
      { protocol: "https", hostname: "humynlabs.ai" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "ui-avatars.com" },
    ],
  },
};

export default nextConfig;
