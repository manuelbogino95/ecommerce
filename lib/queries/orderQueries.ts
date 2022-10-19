import { gql } from '@apollo/client';

export const ORDER_FRAGMENT = gql`
  fragment ActiveOrder on Order {
    active
    id
    lines {
      id
      featuredAsset {
        preview
      }
      productVariant {
        id
        name
      }
      linePriceWithTax
      quantity
    }
    totalQuantity
    totalWithTax
  }
`;

export const GET_ACTIVE_ORDER = gql`
  query GetActiveOrder {
    activeOrder {
      ...ActiveOrder
    }
  }
  ${ORDER_FRAGMENT}
`;
