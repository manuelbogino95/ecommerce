export interface SearchProduct {
  productId: string;
  sku: string;
  productName: string;
  slug: string;
  description: string;
  productAsset?: {
    preview: string;
  };
  priceWithTax: {
    min: number;
    max: number;
  };
}

export interface ProductDetails {
  id: string;
  name: string;
  slug: string;
  description: string;
  featuredAsset: {
    source: string;
  };
  variants: {
    id: string;
    sku: string;
    name: string;
    priceWithTax: string;
  }[];
}

export interface SearchProductsResponse {
  search: {
    items: SearchProduct[];
  };
}

export interface ProductListResponse {
  products: {
    items: ProductDetails[];
  };
}

export interface ProductDetailsResponse {
  product: ProductDetails;
}
