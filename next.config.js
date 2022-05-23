module.exports = {
	reactStrictMode: true,
	images: {
		domains: ['rbx-backend-media.s3.sa-east-1.amazonaws.com'],
		minimumCacheTTL: 15552000,
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		formats: ['image/avif', 'image/webp']
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
};
