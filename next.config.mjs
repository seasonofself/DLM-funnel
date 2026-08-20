/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Add your image domains here when using remote images
    remotePatterns: [],
  },
  async redirects() {
    return [
      // The school pivoted to the Season (12-week cohort) in Aug 2026.
      { source: "/school", destination: "/cohort", permanent: true },
      // Dream Life Mapping's curriculum now lives inside the Season.
      { source: "/dream-life", destination: "/cohort", permanent: true },
      // Old one-time-course sales page.
      { source: "/variant-a", destination: "/cohort", permanent: true },
      // The October 2026 retreat moved from Ericeira to Lourinhã. Keep the old
      // URL alive for shared links, live ads, and anything already emailed out.
      { source: "/retreats/ericeira", destination: "/retreats/lourinha", permanent: true },
    ];
  },
};

export default nextConfig;
