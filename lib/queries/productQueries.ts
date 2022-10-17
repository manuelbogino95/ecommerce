import { gql } from '@apollo/client';

export const ALL_PRODUCTS_QUERY = gql`
  query getProducts {
    products {
      items {
        id
        name
        slug
        description
      }
      totalItems
    }
  }
`;
