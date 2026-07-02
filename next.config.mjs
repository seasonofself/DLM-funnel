/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Add your image domains here when using remote images
    remotePatterns: [],
  },
  async redirects() {
    return [
      // Dream Life Mapping is now the flagship course inside the school.
      { source: "/dream-life", destination: "/school", permanent: true },
      // Old one-time-course sales page.
      { source: "/variant-a", destination: "/school", permanent: true },
    ];
  },
};

export default nextConfig;
