import { getMainDefinition } from 'apollo-utilities';
import { WebSocketLink } from 'apollo-link-ws';
import {
  ApolloClient, InMemoryCache, HttpLink, split,
} from 'apollo-boost';

const getHeaders = () => {
  const token = window.localStorage.getItem('hasura-token');
  if (token) {
    const headers = {
      authorization: `Bearer ${token}`,
    };
    return headers;
  }
  const headers = {
    'x-hasura-admin-secret': `${process.env.VUE_APP_ADMIN_SECRET}`,
    'x-hasura-role': 'crewmate',
    'x-hasura-user-id': 'auth0|12345678910', // Change this to access as different user - DEV
  };
  return headers;
};

const wsLink = new WebSocketLink({
  uri: `wss://${process.env.VUE_APP_GRAPHQL_URL}`,
  options: {
    reconnect: true,
    timeout: 30000,
    connectionParams: () => ({
      headers: getHeaders(),
    }),
  },
});

const httpLink = new HttpLink({
  uri: `https://${process.env.VUE_APP_GRAPHQL_URL}`,
  headers: getHeaders(),
});

interface Definintion {
  kind: string;
  operation?: string;
}

const link = split(
  ({ query }) => {
    const { kind, operation }: Definintion = getMainDefinition(query);
    console.log(kind, operation, 'Query OR Subscription??');
    return kind === 'OperationDefinition'
    && operation === 'subscription';
  },
  wsLink,
  httpLink,
);

export default new ApolloClient({
  link,
  cache: new InMemoryCache({
    addTypename: true,
  }),
});
