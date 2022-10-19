import { gql } from '@apollo/client';
import { ORDER_FRAGMENT } from 'lib/queries/orderQueries';

export const ADD_ITEM_TO_ORDER = gql`
  mutation addToCart($productVariantId: ID!, $qty: Int!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: $qty) {
      ... on Order {
        ...ActiveOrder
      }
    }
  }
  ${ORDER_FRAGMENT}
`;
