import { Button } from 'components/ui';
import { formatPrice } from 'lib/price';
import { Order } from 'lib/types/order';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import {
  CartContainer,
  CartItem,
  ImageContainer,
  OrderContainer,
  ProductName,
  PurchaseWrapper,
  Total,
} from './index.styled';

type CartProps = {
  order: Order;
};

const Cart = ({ order }: CartProps) => {
  const { totalWithTax, lines } = order;

  const onPurchase = () => {
    console.log('order', JSON.stringify(order, null, 2));
    toast.success('Purchase done!!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <CartContainer>
      <OrderContainer>
        {lines.map(
          ({
            productVariant,
            id,
            quantity,
            featuredAsset,
            linePriceWithTax,
          }) => {
            return (
              <CartItem key={id}>
                <ImageContainer>
                  <Image
                    src={featuredAsset.preview}
                    alt={productVariant.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </ImageContainer>
                <div>
                  <ProductName>Product: {productVariant.name}</ProductName>
                  <div>Quantity: {quantity}</div>
                  <div>Subtotal: {formatPrice(linePriceWithTax)}</div>
                </div>
              </CartItem>
            );
          }
        )}
        <Total>
          Total: <span>{formatPrice(totalWithTax)}</span>
        </Total>
        <PurchaseWrapper>
          <Button onClick={onPurchase}>Purchase</Button>
        </PurchaseWrapper>
      </OrderContainer>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
      />
    </CartContainer>
  );
};

export default Cart;
