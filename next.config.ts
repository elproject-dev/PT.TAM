import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    qualities: [50, 60, 75, 100],
  },
  turbopack: {
    root: path.join(path.dirname(fileURLToPath(import.meta.url)), '../../'),
  },
};

export default nextConfig;
