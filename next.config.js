module.exports = {
<<<<<<< HEAD
	reactStrictMode: true,
	images: {
		domains: ['rbx-backend-media.s3.sa-east-1.amazonaws.com'],
		minimumCacheTTL: 15552000
	},
	async headers() {
		return [
			{
				source: '/(.*)',
				locale: false,
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=9999999999, immutable'
					}
				]
			}
		];
	}
=======
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
>>>>>>> 7a17585de6cdeed51efbc2661231ef2c185a9ca4
};
