/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    if (process.env.NODE_ENV !== "production") {
      return [
        {
          destination: process.env.DESTINATION_URL,
          source: process.env.SOURCE_PATH,
        },
      ];
    }
  },
  async redirects() {
    return [
      {
        source: "/tech",
        destination: "/tech/all",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
