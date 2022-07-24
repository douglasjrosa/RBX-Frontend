import { DefaultSeo } from 'next-seo';
import Layout from '@/components/layout';
import '@/styles/index.css';
import { useRouter } from 'next/router';
import Loading from '@/components/elements/loading';
import {metaTitleSuffix, metadata} from 'data/global'

const MyApp = ({ Component, pageProps }) => {
	// Prevent Next bug when it tries to render the [[...slug]] route
	const router = useRouter();
	if (router.asPath === '/[[...slug]]') return <Loading />;
	
	return (
		<>
			{/* Global site metadata */}
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
			{/* Display the content */}

			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
};

export default MyApp;
