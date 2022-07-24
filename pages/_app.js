import Layout from '@/components/layout';

const MyApp = ({ Component, pageProps }) => {
	// Prevent Next bug when it tries to render the [[...slug]] route
	
	return (
		<>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
};

export default MyApp;
