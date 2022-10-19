import { gql } from '@apollo/client';

export const ADD_ITEM_TO_ORDER = gql`
  mutation addToCart($productVariantId: ID!, $qty: Int!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: $qty) {
      ... on Order {
        id
        active
        lines {
          productVariant {
            id
            name
          }
          unitPriceWithTax
        }
      }
    }
  }
`;
