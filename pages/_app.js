import { DefaultSeo } from 'next-seo';
import Layout from '@/components/layout';
import '@/styles/index.css';
import { useRouter } from 'next/router';
import Loading from '@/components/elements/loading';
import { metaTitleSuffix, metadata } from 'data/global';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => {
	const router = useRouter();
	if (router.asPath === '/[[...slug]]') return <Loading />;

	return (
		<>
			<Head>
				<link rel="manifest" href="/manifest.json" />
				<link rel="apple-touch-icon" href="/icon.png"></link>
				<meta name="theme-color" content="#8b572a" />
			</Head>
			
			<DefaultSeo
				titleTemplate={`%s | ${metaTitleSuffix}`}
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
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
};

export default MyApp;
