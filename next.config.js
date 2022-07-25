const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true'
});
const withPWA = require('next-pwa');

module.exports = withPlugins([withBundleAnalyzer, withPWA], {
	pwa: {
		dest: 'public',
		register: true,
		skipWaiting: true,
		publicExcludes: ['!images/*'],
		buildExcludes: [/chunks\/images\/.*$/, /images\/.*$/, /media\/.*$/],
		disable: process.env.NODE_ENV === 'development'
	},
	productionBrowserSourceMaps: true,
	images: {
		loader: 'custom',
		domains: [process.env.NEXT_PUBLIC_BASE_URL],
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
});