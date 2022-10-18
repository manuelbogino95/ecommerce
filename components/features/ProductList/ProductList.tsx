import { SearchProduct } from 'lib/types/queries/product';
import styled from 'styled-components';
import ProductCard from '../ProductCard';

type ProductListProps = {
  products: SearchProduct[];
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  justify-content: space-around;
  grid-row-gap: 10px;
  justify-content: center;
`;

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
