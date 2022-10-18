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

export interface SearchProductsResponse {
  search: {
    items: SearchProduct[];
  };
}
