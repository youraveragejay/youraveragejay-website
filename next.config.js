/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  nextConfig,
  async redirects() {
    return [
      {
        source: "/the-aurora-project/invite",
        destination:
          "https://discord.com/api/oauth2/authorize?client_id=977647458677035008&permissions=8&scope=bot",
        permanent: true,
      },
    ];
  },
};
