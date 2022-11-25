module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/aurora/invite",
        destination:
          "https://discord.com/api/oauth2/authorize?client_id=977647458677035008&permissions=8&scope=bot",
        permanent: true,
      },
    ];
  },
};
