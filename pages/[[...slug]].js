import ErrorPage from 'next/error';
import { getStrapiURL, getPageData } from 'utils/api';
import Sections from '@/components/sections';
import Seo from '@/components/elements/seo';

const DynamicPage = ({ sections, metadata, mounted }) => {	

	// Check if the required data was provided
	if (!sections?.length) {
		return <ErrorPage statusCode={404} />;
	}
	return (
		<>
			{/* Add meta tags for SEO*/}
			<Seo metadata={metadata} />
			{/* Display content sections */}
			<Sections sections={sections} mounted={mounted} />
		</>
	);
};

export async function getStaticPaths() {
	// Get all pages from Strapi
	const pages = await (await fetch(getStrapiURL('/pages'))).json();
	
	const paths = pages.map((page) => {
		// Decompose the slug that was saved in Strapi
		const slugArray = page.slug.split('__');
		return {
			params: { slug: slugArray }
		};
	});
	return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
	// Find the page data for the current slug
	let chainedSlugs;
	if (params == {} || !params.slug) {
		// To get the homepage, find the only page where slug is an empty string
		chainedSlugs = ``;
	} else {
		// Otherwise find a page with a matching slug
		// Recompose the slug that was saved in Strapi
		chainedSlugs = params.slug.join('__');
	}

	// Fetch pages.
	const pageData = await getPageData(chainedSlugs);

	if (pageData == null) {
		// Giving the page no props will trigger a 404 page
		return { props: {} };
	}

	// We have the required page data, pass it to the page component
	const { contentSections, metadata } = pageData;
	return {
		props: {
			sections: contentSections,
			metadata
		}
	};
}

export default DynamicPage;