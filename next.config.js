/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure fresh builds
  generateBuildId: async () => {
    return `build-${Date.now()}`;
  },
};

module.exports = nextConfig;
