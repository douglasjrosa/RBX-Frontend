import Head from 'next/head';
import { useAmp } from 'next/amp';

const AppHead = () => {
	const isAmp = useAmp();
	return (
		<Head>
			<meta isAmp={isAmp} />
			<link rel="manifest" href="/manifest.json" />
			<link rel="apple-touch-icon" href="/icon.png"></link>
			<meta name="theme-color" content="#8b572a" />
		</Head>
	);
};

export default AppHead;
