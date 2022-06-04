import Head from 'next/head';

const AppHead = (props) => {
	const { favicon, preloads } = props;

	/* Favicon */
	return (
		<Head>
			<link rel="shortcut icon" href={favicon} />
			<link rel="manifest" href="/manifest.json" />
			<link rel="apple-touch-icon" href="/icon.png"></link>
			<meta name="theme-color" content="#8b572a" />
			{preloads.map(link => link )}
		</Head>
	);
};

export default AppHead;
