import { useMutation } from '@apollo/client';
import { Button, Input } from 'components/ui';
import { NUMBERS_ONLY_REGEX } from 'lib/consts';
import { useShoppingCart } from 'lib/context/shoppingCartContext';
import { ADD_ITEM_TO_ORDER } from 'lib/mutations/orderMutations';
import { formatPrice } from 'lib/price';
import { AddItemToOrderResponse } from 'lib/types/order';
import { ProductDetails } from 'lib/types/product';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import { Flex, Heading } from 'rebass/styled-components';
import styled from 'styled-components';
import { device } from 'styles/breakpoints';

type ProductViewProps = {
  product: ProductDetails;
};

const ImageContainer = styled.div`
  height: 300px;
  width: 100%;
  position: relative;
  max-width: 500px;

  @media ${device.sm} {
    width: 50%;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  justify-content: center;

  @media ${device.sm} {
    flex-direction: row;
  }
`;

const ProductDetailsWrapper = styled.div`
  max-width: 50%;
`;

const ProductView = ({
  product: { name, description, featuredAsset, variants },
}: ProductViewProps) => {
  const [quantity, setQuantity] = useState(1);
  const { setOrder } = useShoppingCart();
  const [addProductToOrder, { data, loading, error }] = useMutation(
    ADD_ITEM_TO_ORDER,
    {
      onCompleted(data: AddItemToOrderResponse) {
        if (data) {
          setOrder(data.addItemToOrder);
        }
      },
    }
  );

  const [variant] = variants;
  const { priceWithTax } = variant ?? {};

  const onQuantityChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    NUMBERS_ONLY_REGEX.test(value) && setQuantity(Number(value));
  };

  const onSubmit = () => {
    addProductToOrder({
      variables: { productVariantId: variant.id, qty: quantity },
    });
  };

  return (
    <FlexWrapper>
      <ImageContainer>
        {featuredAsset?.preview ? (
          <Image src={featuredAsset?.preview} alt={name} layout="fill" />
        ) : null}
      </ImageContainer>
      <ProductDetailsWrapper>
        <Heading>{name}</Heading>
        <span>Price: {priceWithTax ? formatPrice(priceWithTax) : ''}</span>
        <Flex alignItems="center">
          <Input
            name="quantity"
            placeholder="Qty"
            value={quantity}
            onChange={onQuantityChange}
          />
          <Button onClick={onSubmit}>Add to cart</Button>
        </Flex>
        <p>{description}</p>
      </ProductDetailsWrapper>
    </FlexWrapper>
  );
};

export default ProductView;
