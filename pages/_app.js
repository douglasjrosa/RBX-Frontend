import AppHead from '@/components/elements/head';
import { DefaultSeo } from 'next-seo';
import Layout from '@/components/layout';
import '@/styles/index.css';
import { global } from 'lib/global';
import { useRouter } from 'next/router';
import Loading from '@/components/elements/loading';

const MyApp = ({ Component, pageProps }) => {
	// Prevent Next bug when it tries to render the [[...slug]] route
	const router = useRouter();
	if (router.asPath === '/[[...slug]]') return <Loading />;

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

			<Layout global={global}>
				<Component {...pageProps} />
			</Layout>
		</>
	);
};

export default MyApp;
