import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination: 
          process.env.NODE_ENV === "development"
            ? "http://backend:8000/api/:path*"
            : "/api/",
      },
    ];
  }
};

export default nextConfig;
