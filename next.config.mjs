/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Add your image domains here when using remote images
    remotePatterns: [],
  },
  async redirects() {
    return [
      // Legacy offer URLs now point to the self-paced course page.
      { source: "/school", destination: "/your-next-season", permanent: true },
      { source: "/dream-life", destination: "/your-next-season", permanent: true },
      { source: "/variant-a", destination: "/your-next-season", permanent: true },
      // The October 2026 retreat moved from Ericeira to Lourinhã. Keep the old
      // URL alive for shared links, live ads, and anything already emailed out.
      { source: "/retreats/ericeira", destination: "/retreats/lourinha", permanent: true },
    ];
  },
};

export default nextConfig;
