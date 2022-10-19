import { FeaturedAsset } from './product';

export interface OrderLine {
  id: string;
  featuredAsset: FeaturedAsset;
  productVariant: {
    id: string;
    name: string;
  };
  linePriceWithTax: number;
  quantity: number;
}

export interface Order {
  id: string;
  active: boolean;
  lines: OrderLine[];
  totalQuantity: number;
  totalWithTax: number;
}

export interface GetActiveOrderResponse {
  activeOrder: Order;
}

export interface AddItemToOrderResponse {
  addItemToOrder: Order;
}
