import NextImage from 'next/image';
import { getStrapiMedia } from 'utils/media';
import PropTypes from 'prop-types';
import { mediaPropTypes } from 'utils/types';

const Image = (props) => {
	const { media } = props;
	const { url, alternativeText, className, width, height, layout, unsized } =
		media;

	let fullUrl = getStrapiMedia(url);
	if (media.local != undefined) { fullUrl = url; }
	

	let newProps = {
		src: fullUrl,
		alt: props.alternativeText || alternativeText,
		className: props.className || className,
		width: props.width || width,
		height: props.height || height,
		layout: props.layout || layout
	};

	for (let prop in newProps) {
		if (newProps[prop] === '') delete newProps[prop];
	}
	return <NextImage {...newProps} />;
};

Image.propTypes = {
	media: mediaPropTypes.isRequired,
	className: PropTypes.string
};

export default Image;
