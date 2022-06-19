import NextImage from 'next/image';

const customLoader = ({ src, width, quality }) => {
	return `http://localhost:3000/_next/image?url=${encodeURIComponent(
		src
	)}&w=${Math.min(width, 1080)}&q=${quality || 75}`;
};

const Image = (props) => {
	const { media, priority } = props;

	const src = require('../../public/images/' + media.name).default.src;

	const alt = media.alternativeText;
	const className = media.className;
	const width = media.width;
	const height = media.height;
	const layout = 'responsive';

	return (
		<NextImage
			loader={customLoader}
			src={src}
			alt={alt}
			className={className}
			width={width}
			height={height}
			layout={layout}
			priority={priority}
		/>
	);
};

export default Image;
