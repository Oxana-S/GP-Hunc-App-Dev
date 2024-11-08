import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  experimental: {
      reactCompiler: true,
      optimizePackageImports: ['@mantine/core', '@mantine/hooks', '@mantine/charts']
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  }
};

export default withBundleAnalyzer(nextConfig);
