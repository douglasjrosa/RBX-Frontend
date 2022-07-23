import NextImage from 'next/image';
import { useAmp } from 'next/amp';

const customLoader = ({ src, width, quality }) => {
	return `${src}?w=${Math.min(width, 1080)}&q=${quality || 75}`;
};

const Image = (props) => {
	const isAmp = useAmp();

	const { media } = props;
	if (!media || !media.url) return null;
	const url = `images/${media.name}`;

	const blurDataURL = require('../../public/images/' + media.name).default
		.blurDataURL;

	const alt = props.alternativeText || media.alternativeText || '';
	const className = props.className || media.className || '';
	const width = props.width || media.width;
	const height = props.height || media.height;
	const layout = props.layout || 'responsive';
	const priority = props.priority || false;

	return isAmp ? (
		<amp-img
			src={url}
			alt={alt}
			className={className}
			width={width}
			height={height}
			layout={layout}
		/>
	) : (
		<NextImage
			loader={customLoader}
			src={url}
			alt={alt}
			className={className}
			width={width}
			height={height}
			layout={layout}
			priority={priority}
			placeholder="blur"
			blurDataURL={blurDataURL}
		/>
	);
};

export default Image;
