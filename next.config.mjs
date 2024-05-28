/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API: "http://localhost:4000/api",
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "thispersondoesnotexist.com" },
    ],
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
      // Wildcard path matching
      {
        source: "/blog/:slug",
        destination: "/news/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
