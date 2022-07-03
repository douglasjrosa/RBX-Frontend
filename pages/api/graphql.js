import { ApolloServer, gql } from 'apollo-server-micro';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { fetchAPI, getPageData } from 'utils/api';

const typeDefs = gql`
	type Global {
		msg: String
	}

	type Media {
		name: String
		alternativeText: String
		size: Float
		width: Float
		height: Float
		url: String
	}

	type Link {
		newTab: Boolean
		url: String
		text: String
	}

	type PageMetadata {
		twitterCardType: String
		metaTitle: String
		metaDescription: String
		twitterUsername: String
		shareImage: Media
	}

	type PageContentSectionsFeature {
		joinNextRow: Boolean
		title: String
		description: String
		link: Link
		media: Media
		icon: Media
	}

	type PageContentSections {
		component: String
		content: String
		features: [PageContentSectionsFeature]
	}

	type Page {
		status: String
		slug: String
		shortName: String
		metadata: PageMetadata
		contentSections: [PageContentSections]
	}

	type Query {
		global: Global
		pages: [Page]
		page(slug: String): Page
	}
`;

const resolvers = {
	Query: {
		global: async () => await fetchAPI('/global'),
		pages: async () => await fetchAPI('/pages'),
		page: async (_, { slug }) => {
			const page = await getPageData(slug);
			page.contentSections.map((sectionProp) => {
				sectionProp['component'] = sectionProp.__component;
			});
			return page;
		}
	}
};

export const graphQLClient = new ApolloServer({
	typeDefs,
	resolvers,
	playground: true,
	plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
});

const startServer = graphQLClient.start();

export default async function handler(req, res) {
	await startServer;
	await graphQLClient.createHandler({
		path: '/api/graphql'
	})(req, res);
}

export const config = {
	api: {
		bodyParser: false
	}
};
