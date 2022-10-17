export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface ProductsResponse {
  products: {
    items: Product[];
  };
}
