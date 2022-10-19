import { useQuery } from '@apollo/client';
import Cart from 'components/features/Cart';
import { GET_ACTIVE_ORDER } from 'lib/queries/orderQueries';
import { GetActiveOrderResponse } from 'lib/types/order';

const CheckoutPage = () => {
  const { loading, data } = useQuery<GetActiveOrderResponse>(GET_ACTIVE_ORDER);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>{data?.activeOrder ? <Cart order={data.activeOrder} /> : null}</div>
  );
};

export default CheckoutPage;
