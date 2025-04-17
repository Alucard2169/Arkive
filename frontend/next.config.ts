import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: 
          process.env.NODE_ENV === "development"
            ? "http://backend:8000/api/:path*"
            : "/api/:path*",
      },
    ];
  },
  // Add these settings to handle cookies properly
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Credentials",
            value: "true",
          },
        ],
      },
    ];
  },
};

export default nextConfig;