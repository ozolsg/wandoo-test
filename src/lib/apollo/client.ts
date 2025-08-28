import { HttpLink } from '@apollo/client';
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from '@apollo/client-integration-nextjs';
import { SWAPI_URL } from '../utils/constants';

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            allPeople: {
              keyArgs: false,
            },
            person: {
              keyArgs: ['id'],
            },
          },
        },
      },
    }),
    link: new HttpLink({
      uri: SWAPI_URL,
    }),
  });
});
