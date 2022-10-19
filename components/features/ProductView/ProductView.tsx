import { useMutation } from '@apollo/client';
import { Button, Input } from 'components/ui';
import { NUMBERS_ONLY_REGEX } from 'lib/consts';
import { useShoppingCart } from 'lib/context/shoppingCartContext';
import { ADD_ITEM_TO_ORDER } from 'lib/mutations/orderMutations';
import { formatPrice } from 'lib/price';
import { GET_ACTIVE_ORDER } from 'lib/queries/orderQueries';
import { AddItemToOrderResponse } from 'lib/types/order';
import { ProductDetails } from 'lib/types/product';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import { Flex, Heading } from 'rebass/styled-components';
import { ToastContainer, toast } from 'react-toastify';
import {
  FlexWrapper,
  ImageContainer,
  InputContainer,
  ProductDetailsWrapper,
} from './index.styled';
import { useRouter } from 'next/router';

type ProductViewProps = {
  product: ProductDetails;
};

const ProductView = ({
  product: { name, description, featuredAsset, variants },
}: ProductViewProps) => {
  const [quantity, setQuantity] = useState(1);
  const { setOrderQuantity } = useShoppingCart();
  const { push } = useRouter();
  const [addProductToOrder, { data, loading, error }] = useMutation(
    ADD_ITEM_TO_ORDER,
    {
      onCompleted(data: AddItemToOrderResponse) {
        if (data) {
          setOrderQuantity(data.addItemToOrder.totalQuantity);
          toast.success('Product added successfully.', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
          });
          setTimeout(() => push('/search'), 2300);
        }
      },
      refetchQueries: [{ query: GET_ACTIVE_ORDER }],
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
          <InputContainer>
            <Input
              name="quantity"
              placeholder="Qty"
              value={quantity}
              onChange={onQuantityChange}
            />
          </InputContainer>
          <Button onClick={onSubmit}>Add to cart</Button>
        </Flex>
        <p>{description}</p>
      </ProductDetailsWrapper>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
      />
    </FlexWrapper>
  );
};

export default ProductView;
