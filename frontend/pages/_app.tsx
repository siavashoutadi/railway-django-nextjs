import type { AppProps } from 'next/app';
import Layout from '../components/layout/primary/Layout';
import '../styles/globals.css';

import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { AuthContextProvider } from '../store/auth-context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </AuthContextProvider>
  );
}

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default MyApp;

export async function getStaticProps() {}
