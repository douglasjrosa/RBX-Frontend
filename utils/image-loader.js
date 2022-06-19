const customLoader = ({ src, width, quality }) => {
	`https://ribermax.com.br/_next/image?url=${encodeURIComponent(
		src
	)}&w=${Math.min(width, 1080)}&q=${quality || 75}`;
}
module.exports = customLoader;