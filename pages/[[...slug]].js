import ErrorPage from 'next/error';
import { getStrapiURL, getPageData } from 'utils/api';
import Sections from '@/components/sections';
import Seo from '@/components/elements/seo';

const DynamicPage = ({ sections, metadata }) => {

	// Check if the required data was provided
	if (!sections?.length) {
		return <ErrorPage statusCode={404} />;
	}
	return (
		<>
			{/* Add meta tags for SEO*/}
			<Seo metadata={metadata} />
			{/* Display content sections */}
			<Sections sections={sections} />
		</>
	);
};

export async function getStaticPaths() {
	// Get all pages from Strapi
	const pages = [
		{
			status: 'published',
			_id: '6101a60c1d24981a346d2d8c',
			slug: 'caixa-madeira-fumigada-exportacao',
			shortName: 'Caixa de madeira fumigada para exportação',
			metadata: {
			  twitterCardType: 'summary_large_image',
			  _id: '6101a60c1d24981a346d2d8d',
			  metaTitle: 'Caixa de madeira fumigada para exportação',
			  metaDescription: 'A RIBERMAX é a Fabricante de Embalagem de Madeira que pode te ajudar se você precisa de CAIXA FUMIGADA P/ EXPORTAÇÃO. Desde 1996, o único foco da Ribermax tem sido produzir e inovar no segmento de Paletes, Engradados, Estrados, Caixas e Embalagens de Madeira para Transporte de Equipamentos, Peças e Produtos em Geral.\n',
			  twitterUsername: '@RibermaxEmbalagens',
			  __v: 0,
			  shareImage: [Object],
			  id: '6101a60c1d24981a346d2d8d'
			},
			contentSections: [ [Object] ],
			createdAt: '2021-07-28T18:46:36.904Z',
			updatedAt: '2022-06-02T13:25:27.660Z',
			__v: 2,
			id: '6101a60c1d24981a346d2d8c'
		  }
	];//await (await fetch(getStrapiURL('/pages'))).json();
	
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
