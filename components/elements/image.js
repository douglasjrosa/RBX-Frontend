import NextImage from 'next/image';
import { getStrapiMedia } from 'utils/media';
import PropTypes from 'prop-types';
import { mediaPropTypes } from 'utils/types';
import { useState, useEffect } from 'react';
import { fetchAPI } from 'utils/api';

const Image = (props) => {
	const { media } = props;
	const { name, url, alternativeText, className, width, height, layout } =
		media;

	const [medias, setMedias] = useState();
	const getMedias = () => {
		(async () => {
			const myHeaders = new Headers();

			const myInit = {
				method: 'GET',
				headers: myHeaders,
				mode: 'cors',
				cache: 'default'
			};

			const res = await fetchAPI(`/upload/files`, myInit);
			setMedias(res);
		})();
	};

	useEffect(() => getMedias(), []);
	console.log(medias);

	let fullUrl = getStrapiMedia(url);
	if (media.local != undefined) {
		fullUrl = url;
	}

	fullUrl = '/images/' + name;
	//console.log(fullUrl);

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
