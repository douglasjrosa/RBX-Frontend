module.exports = {
  images: {
    domains: ["rbx-backend-media.s3.sa-east-1.amazonaws.com"],
    minimumCacheTTL: 315360000,
    disableStaticImages: true
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=315360000, immutable',
          }
        ],
      },
    ]
  },
};
