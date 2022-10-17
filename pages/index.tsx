import { useQuery } from '@apollo/client';
import Head from 'next/head';
import styled from 'styled-components';
import { ALL_PRODUCTS_QUERY } from '../lib/queries';
import { ProductsResponse } from '../lib/types/queries/product';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Home = () => {
  const { loading, error, data } =
    useQuery<ProductsResponse>(ALL_PRODUCTS_QUERY);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>E-commerce</title>
        <meta name="description" content="E-commerce app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title>E-commerce</Title>
      <div>
        {data?.products.items.map(({ id, name }) => (
          <p key={id}>{name}</p>
        ))}
      </div>
    </div>
  );
};

export default Home;
