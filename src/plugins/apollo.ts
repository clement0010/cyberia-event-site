import { getMainDefinition } from 'apollo-utilities';
import { WebSocketLink } from 'apollo-link-ws';
import {
  ApolloClient, InMemoryCache, HttpLink, split,
} from 'apollo-boost';

const getHeaders = async () => {
  const token = await window.localStorage.getItem('hasura-token');
  if (token) {
    const headers = {
      // 'x-hasura-admin-secret': `${process.env.VUE_APP_ADMIN_SECRET}`,
      // 'x-hasura-role': 'public',
      // 'x-hasura-user-id': '0', // Change this to access as different user - DEV
      authorization: '',
    };
    headers.authorization = `Bearer ${token}`;
    console.log(headers);
    return headers;
  }
  const headers = {

  };
  return headers;
};

const wsLink = new WebSocketLink({
  uri: `wss://${process.env.VUE_APP_GRAPHQL_URL}`,
  options: {
    reconnect: true,
    timeout: 30000,
    connectionParams: async () => ({
      headers: await getHeaders(),
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
  // Need to figure out why httplink doesnt work at first login
  wsLink,
  wsLink,
);

export default new ApolloClient({
  link,
  cache: new InMemoryCache({
    addTypename: true,
  }),
});
