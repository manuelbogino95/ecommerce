import { faker } from '@faker-js/faker';
import { SearchProduct } from 'lib/types/product';

export const createRandomSearchProduct = (): SearchProduct => {
  return {
    productId: faker.datatype.uuid(),
    sku: faker.random.word(),
    productName: faker.commerce.productName(),
    slug: faker.datatype.string(),
    description: faker.commerce.productDescription(),
    productAsset: {
      preview: faker.image.avatar(),
    },
    priceWithTax: {
      min: faker.datatype.number(),
      max: faker.datatype.number(),
    },
  };
};

export const createRandomSearchProductList = (
  length: number
): SearchProduct[] => {
  const searchProducts: SearchProduct[] = [];

  Array.from({ length }).forEach(() => {
    searchProducts.push(createRandomSearchProduct());
  });

  return searchProducts;
};
