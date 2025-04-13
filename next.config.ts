import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Add allowedDevOrigins to resolve cross-origin request issue
  allowedDevOrigins: ['https://3000-idx-studio-1744574183479.cluster-xpmcxs2fjnhg6xvn446ubtgpio.cloudworkstations.dev'],
};

export default nextConfig;
