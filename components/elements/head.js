import Head from 'next/head';

const AppHead = () => {
	return (
		<Head>
			<link rel="manifest" href="/manifest.json" />
			<link rel="apple-touch-icon" href="/icon.png"></link>
			<meta name="theme-color" content="#8b572a" />
		</Head>
	);
};

export default AppHead;
