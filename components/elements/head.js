import Head from 'next/head';
import { useAmp } from 'next/amp';
import AmpStyles from '@/styles/amp-styles';

const AppHead = (props) => {
	const { favicon } = props;
	const isAmp = useAmp();

	/* Favicon */
	return (
		<Head>
			{isAmp && <AmpStyles />}
			<link rel="shortcut icon" href={favicon} />
			<link rel="manifest" href="/manifest.json" />
			<link rel="apple-touch-icon" href="/icon.png"></link>
			<meta name="theme-color" content="#8b572a" />
		</Head>
	);
};

export default AppHead;
