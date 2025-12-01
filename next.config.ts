import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzerConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  // Disable ESLint during builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Disable minification (optional - remove if not needed)
    config.optimization.minimize = false;

    // Polyfill for @react-pdf/renderer
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        crypto: false,
        stream: false,
        zlib: false,
        fs: false,
        path: false,
      };
    }
    
    return config;
  },
};

// Export with bundle analyzer
export default withBundleAnalyzerConfig(nextConfig);