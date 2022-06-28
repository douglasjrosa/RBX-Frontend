import ErrorPage from 'next/error';
import { slugs } from '@/lib/slugs';
import Sections from '@/components/sections';
import Seo from '@/components/elements/seo';
import { useRouter } from 'next/router';
import Loading from '@/components/elements/loading';
import { getPageData } from '@/utils/api';

export const config = { amp: 'hybrid' };

const DynamicPage = ( props ) => {
	console.log(props);
	
	const router = useRouter();
	if (router.isFallback) return <Loading />;
	if (!props) return <ErrorPage statusCode={404} />;

	const { metadata, contentSections, slug } = props;
	return (
		<>
			{/* Add meta tags for SEO*/}
			<Seo metadata={metadata} />
			{/* Display content sections */}
			<Sections sections={contentSections} slug={slug} />
		</>
	);
};

export const getStaticPaths = async () => {
	const paths = slugs.map((slug) => {
		const slugArray = slug.split('__');

		return { params: { slug: slugArray } };
	});

	return { paths, fallback: true };
};

export async function getStaticProps({ params }) {
	let chainedSlugs;
	if (params == {} || !params.slug) {
		// To get the homepage, find the only page where slug is an empty string
		chainedSlugs = ``;
	} else {
		// Otherwise find a page with a matching slug
		// Recompose the slug that was saved in Strapi
		chainedSlugs = params.slug.join('__');
	}

	if( !slugs.includes(chainedSlugs) ) return { props: {} };
	return {props: {metadata: {},
		contentSections: [],
		slug: ""}};
	const pageProps = await getPageData(chainedSlugs);

	const { metadata, contentSections, slug } = pageProps;

	return {
		props: {
			metadata,
			contentSections,
			slug
		}
	};
}

export default DynamicPage;
