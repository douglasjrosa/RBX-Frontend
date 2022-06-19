import ErrorPage from 'next/error';
import { slugs } from '@/lib/slugs';
import Sections from '@/components/sections';
import Seo from '@/components/elements/seo';
import { useRouter } from 'next/router'
import Loading from '@/components/elements/loading';

const DynamicPage = ({ page, medias }) => {
		
	const router = useRouter();
	if (router.isFallback) return <Loading />
	if (!page) return <ErrorPage statusCode={404} />;
	
	const { metadata, sections, theme } = page;
	
	return (
		<>
			{/* Add meta tags for SEO*/}
			<Seo metadata={metadata} />
			{/* Display content sections */}
			<Sections sections={sections} theme={theme} />
		</>
	);
};

export const getStaticPaths = async () => {
	const paths = slugs.map((slug) => ({ params: { slug: slug } }));

	return { paths, fallback: true };
};

export async function getStaticProps({ params: { slug } }) {

	const slugPath = slug ? slug : 'home';
	const { page } = slugs.includes(slugPath)
		? require('lib/pages/' + slugPath)
		: { page: null };

	return {
		props: {
			page
		}
	};
}

export default DynamicPage;
