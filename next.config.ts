import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/preview/:group/ox-alpha/:path*",
        destination: "/preview/:group/glm-5.3-flash/:path*",
        permanent: true,
      },
      {
        source: "/:group/ox-alpha/:path*",
        destination: "/:group/glm-5.3-flash/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
