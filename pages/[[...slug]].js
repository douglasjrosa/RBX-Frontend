import ErrorPage from 'next/error';
import { slugs } from '@/lib/slugs';
import Sections from '@/components/sections';
import Seo from '@/components/elements/seo';
import { useRouter } from 'next/router'
import Loading from '@/components/elements/loading';
import { getPageData } from '@/utils/api'

const DynamicPage = ({pageProps}) => {
		
	const router = useRouter();
	if (router.isFallback) return <Loading />
	if (!pageProps) return <ErrorPage statusCode={404} />;
	
	const { metadata, contentSections, slug } = pageProps;
	
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

	const pageProps = slugs.includes(chainedSlugs)
		? await getPageData(chainedSlugs)
		: null;

	return {
		props: {
			pageProps
		}
	};
}

export default DynamicPage;
