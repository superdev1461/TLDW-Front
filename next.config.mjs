/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  rewrites: async () => [
    {
      source: "/dynamic-sitemap.xml",
      destination: "/dynamic-sitemap",
    },
    {
      source: "/dynamic-sitemap-:page.xml",
      destination: "/dynamic-sitemap/:page",
    },
  ],
};

export default nextConfig;
