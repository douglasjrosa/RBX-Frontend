//import NextImage from 'next/image';

const Image = (props) => {
	const { media, priority } = props;
	const { alternativeText, className, width, height, layout, name } = media;

	const src = require('../../public/images/' + name).default.src;

	let newProps = {
		src,
		alt: props.alternativeText || alternativeText,
		className: props.className || className,
		width: props.width || width,
		height: props.height || height,
		layout: props.layout || layout || 'responsive',
		priority
	};

	for (let prop in newProps) {
		if (newProps[prop] === '') delete newProps[prop];
	}
	return <img {...newProps} />;
};

export default Image;
