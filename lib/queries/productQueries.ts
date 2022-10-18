import { gql } from '@apollo/client';

export const ALL_PRODUCTS_QUERY = gql`
  query getProducts {
    products {
      items {
        id
        name
        slug
        description
        featuredAsset {
          source
        }
      }
      totalItems
    }
  }
`;

export const SEARCH_PRODUCTS_QUERY = gql`
  query SearchProducts($input: SearchInput!) {
    search(input: $input) {
      items {
        sku
        slug
        productId
        productName
        productAsset {
          preview
        }
        priceWithTax {
          ... on PriceRange {
            min
            max
          }
        }
        description
      }
      totalItems
    }
  }
`;
