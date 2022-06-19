import AppHead from '@/components/elements/head';
import { DefaultSeo } from 'next-seo';
import Layout from '@/components/layout';
import '@/styles/index.css';
import { global } from 'lib/global'

const MyApp = (params) => {
	//return console.log(params.router);
	
	const { Component, pageProps } = params;
	
	const router = { state: { asPath: '/caixa-madeira-compensado'}};

	if ( !router.state || router.state.asPath === '/[[...slug]]') return null;
	
	const { metadata } = global;
	const favicon = global.favicon.url;
	
	return (
		<>
			<AppHead favicon={favicon} />
			{/* Global site metadata */}
			<DefaultSeo
				titleTemplate={`%s | ${global.metaTitleSuffix}`}
				title={'Page'}
				description={metadata.metaDescription}
				openGraph={{
					images: Object.values(metadata.shareImage.formats).map(
						(image) => {
							return {
								url: image.url,
								width: image.width,
								height: image.height
							};
						}
					)
				}}
				twitter={{
					cardType: metadata.twitterCardType,
					handle: metadata.twitterUsername
				}}
			/>
			{/* Display the content */}

			<Layout global={global} >
				<Component {...pageProps} />
			</Layout>
		</>
	);
};

export default MyApp;
