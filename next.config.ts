import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL('https://randomuser.me/api/portraits/**'), 
      new URL('https://upload.wikimedia.org/**')],
  },
};

export default nextConfig;
