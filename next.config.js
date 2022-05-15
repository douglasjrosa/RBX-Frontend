module.exports = {
  images: {
    domains: ["rbx-backend-media.s3.sa-east-1.amazonaws.com"],
    minimumCacheTTL: 15552000
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, immutable',
          }
        ],
      },
    ]
  },
};
