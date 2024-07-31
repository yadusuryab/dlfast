module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
          port: '',
          pathname: '**',
        },
      ],
    },
    async redirects() {
      return [
        {
          source: '/sitemap.xml',
          destination: '/api/sitemap',
          permanent: true,
        },
      ];
    },
  }