export interface OrderLine {
  productVariant: {
    id: string;
    name: string;
  };
  unitPriceWithTax: number;
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
