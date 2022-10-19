import { SearchProduct } from 'lib/types/product';
import ProductCard from '../ProductCard';
import { GridContainer } from './index.styled';

type ProductListProps = {
  products: SearchProduct[];
};

const ProductList = ({ products }: ProductListProps) => {
  return (
    <GridContainer>
      {products.map(({ productId, ...rest }) => (
        <ProductCard key={productId} product={{ productId, ...rest }} />
      ))}
    </GridContainer>
  );
};

export default ProductList;
