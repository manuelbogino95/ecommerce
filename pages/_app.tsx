import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/layout';
import { useApollo } from '../lib/apolloClient';
import { GlobalStyle, theme } from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ApolloProvider client={apolloClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </ThemeProvider>
    </>
  );
}
