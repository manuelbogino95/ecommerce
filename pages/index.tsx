import { useQuery } from '@apollo/client';
import ProductList from 'components/features/ProductList';
import { SEARCH_PRODUCTS_QUERY } from 'lib/queries/productQueries';
import Head from 'next/head';
import { SearchProductsResponse } from '../lib/types/queries/product';

const Home = () => {
  return (
    <div>
      <Head>
        <title>E-commerce</title>
        <meta name="description" content="E-commerce app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;
