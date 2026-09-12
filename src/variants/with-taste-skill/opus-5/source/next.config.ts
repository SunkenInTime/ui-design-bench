import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Protocol/hostname/port/pathname/search are all spelled out: omitting any
    // of them implies a `**` wildcard, which the Next 16 docs advise against.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/seed/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
        port: "",
        pathname: "/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
