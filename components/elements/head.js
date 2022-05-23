import Head from 'next/head';

const AppHead = (props) => {
	const {favicon} = props;
	
	/* Favicon */
	return (
		<Head>
			<link rel="shortcut icon" href={favicon} />
		</Head>
	);
};

export default AppHead;
