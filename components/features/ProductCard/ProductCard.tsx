import { Card, Text } from 'rebass/styled-components';
import Image from 'next/image';
import { SearchProduct } from 'lib/types/product';
import Link from 'next/link';
import { LinkWrapper, Price } from './index.styled';
import { formatPrice } from 'lib/price';

type ProductCardProps = {
  product: SearchProduct;
};

const ProductCard = ({
  product: {
    productName,
    productAsset,
    slug,
    priceWithTax: { max },
  },
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
          <Text fontSize={18} textAlign="center" marginBottom={10}>
            {productName}
          </Text>
          <Price>{formatPrice(max)}</Price>
        </Card>
      </LinkWrapper>
    </Link>
  );
};

export default ProductCard;
