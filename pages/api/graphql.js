import { ApolloServer, gql } from 'apollo-server-micro';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import Global from './global';
import Pages from './pages';

const typeDefs = gql`
	
	type Global {
		msg: String
	}

	type Query {
		global: Global
	}
`;

const resolvers = {
	Query: {
		global() {
			return Global;
		}
	}
};

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers,
	playground: true,
	plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
});

const startServer = apolloServer.start();

export default async function handler(req, res) {
	await startServer;
	await apolloServer.createHandler({
		path: '/api/graphql'
	})(req, res);
}

export const config = {
	api: {
		bodyParser: false
	}
};
