import { imageLoader } from 'next-image-loader/build/image-loader';

imageLoader.loader = ({ src, width, quality }) =>
	`http://localhost:3000/_next/image?url=${encodeURIComponent(
		src
	)}&w=${Math.min(width, 1080)}&q=${quality || 75}`;
