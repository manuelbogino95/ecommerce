import { Card, Text } from 'rebass/styled-components';
import Image from 'next/image';
import { SearchProduct } from 'lib/types/product';
import Link from 'next/link';
import styled from 'styled-components';

type ProductCardProps = {
  product: SearchProduct;
};

const LinkWrapper = styled.a`
  all: unset;
  cursor: pointer;
`;

const ProductCard = ({
  product: { productName, productAsset, slug },
}: ProductCardProps) => {
  return (
    <Link href={`/product/${slug}`}>
      <LinkWrapper>
        <Card width={256} px={2} py="2">
          <Image
            src={productAsset?.preview || '/images/no-image'}
            alt={productName}
            width={256}
            height={256}
          />
          <Text fontSize={18} textAlign="center">
            {productName}
          </Text>
        </Card>
      </LinkWrapper>
    </Link>
  );
};

export default ProductCard;
