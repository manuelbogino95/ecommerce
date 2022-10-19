import { formatPrice } from 'lib/price';
import { render, screen } from 'lib/test-utils';
import { createRandomSearchProduct } from '__mocks__/productMock';
import ProductCard from '.';

describe(ProductCard, () => {
  const randomSearchProduct = createRandomSearchProduct();

  it('should render product image', () => {
    render(<ProductCard product={randomSearchProduct} />);

    const productImage = screen.getByAltText(randomSearchProduct.productName);

    expect(productImage).toBeVisible();
  });

  it('should render product name and price', () => {
    render(<ProductCard product={randomSearchProduct} />);

    const productName = screen.getByText(randomSearchProduct.productName);
    const productPrice = screen.getByText(
      formatPrice(randomSearchProduct.priceWithTax.max)
    );

    expect(productName).toBeVisible();
    expect(productPrice).toBeVisible();
  });
});
