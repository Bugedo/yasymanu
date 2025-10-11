/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure fresh builds
  generateBuildId: async () => {
    return `build-${Date.now()}`;
  },
  // Disable experimental features that can cause issues
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
};

module.exports = nextConfig;
