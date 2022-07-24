import ErrorPage from 'next/error';
import Sections from '@/components/sections';
import Seo from '@/components/elements/seo';
import { useRouter } from 'next/router';
import Loading from '@/components/elements/loading';
import { graphQLClient } from '../pages/api/graphql';

export const config = { amp: 'hybrid' };

const DynamicPage = ({ page }) => {
	const router = useRouter();

	if (router.isFallback) return <Loading />;
	if (!page) return <ErrorPage statusCode={404} />;

	const { metadata, contentSections, slug } = page;
	return (
		<>
			{/* Add meta tags for SEO*/}
			<Seo metadata={metadata} />
			{/* Display content sections */}
			<Sections sections={contentSections} slug={slug} />
		</>
	);
};

const getPages = async () => {
	const query = `
		query{
			pages {
				slug
			}
		}
	`;

	const {
		data: { pages }
	} = await graphQLClient.executeOperation({ query });

	const exceptions = ['images', 'teste'];
	const filteredPages = [];
	pages.map((page) => {
		if (!exceptions.includes(page.slug)) filteredPages.push(page.slug);
	});
	return filteredPages;
};

export const getStaticPaths = async () => {
	const pages = await getPages();

	const paths = pages.map((page) => {
		return { params: { slug: page.split('__') } };
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

	const query = `
		query{
			page(slug: "${chainedSlugs}"){
				slug
				contentSections {
					component
					content
					features {
						joinNextRow
						title
						description
						link {
							newTab
							url
							text
						}
						media {
							name
							alternativeText
							size
							width
							height
							url
						}
						icon {
							name
							alternativeText
							size
							width
							height
							url
						}
					}
				}
				metadata {
					twitterCardType
					metaTitle
					metaDescription
					shareImage {
						name
						alternativeText
						size
						width
						height
						url
					}
				}
			}
		}
	`;

	const {
		data: { page }
	} = await graphQLClient.executeOperation({ query });

	return page.metadata === undefined || page.contentSections === undefined
		? { props: { page: {} } }
		: { props: { page } };
}

export default DynamicPage;
