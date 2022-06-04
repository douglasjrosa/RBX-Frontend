const escapeHtml = (text) => {
	var map = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&#039;',
		'/': '%2F',
		' ': '%20'
	};

	return text.replace(/[&<>"'\/ ]/g, function (m) {
		return map[m];
	});
};

const propsPrepare = (img, publicPath = false) => {
	const imgFile = escapeHtml(img.src);
	const baseLink = publicPath
		? `/images/${imgFile}`
		: `/_next/image?url=${imgFile}`;

	const quality = img.quality != undefined ? img.quality : 75;

	const sizes = [3840, 2048, 1920, 1200, 1080, 828, 750, 640];
	let srcsetSize = '';
	let srcsetSizes = sizes.map((size) => {
		if (size <= img.width || 1) {
			srcsetSize = `${baseLink}&amp;w=${size}`;
			srcsetSize += `&amp;q=${quality}`;
			srcsetSize += ` ${size}w`;
			return srcsetSize;
		}
	});
	return srcsetSizes.reverse().join(', ');
};

const getName = (data) => {
	return {
		zap: () => data.global.whatsappImage.name,
		bg: () => {
			const bgClasses = {
				'bg-rbx-wood': 'wood-min.webp',
				'bg-rbx-porto': 'porto de santos optimized.avif'
			};
			return bgClasses[data.bgImage];
		},
		logo: () => data.global.navbar.logo.name,
		img1: () => data.sections[0].features[0].media.name,
		img2: () => data.sections[0].features[1].media.name
	};
};

export const preloadPrepare = (data) => {

	// In case NextImage Priority prop stops working, consider to add those items
	// to the above array in order to preload them.
	//['zap', 'logo', 'img1', 'img2']
	const names = ['bg'].map((item) => getName(data)[item]() );

	return names.map((name, key) => {
		const img = require('../public/images/' + name).default;

		const srcset = propsPrepare(img);

		return (
			<link
				key={`prelink-${key}`}
				rel="preload"
				as="image"
				imagesrcset={srcset}
				imagesizes="100vw"
			/>
		);
	});
};