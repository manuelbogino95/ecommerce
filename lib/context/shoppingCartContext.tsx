import { useQuery } from '@apollo/client';
import { GET_ACTIVE_ORDER } from 'lib/queries/orderQueries';
import { GetActiveOrderResponse, Order } from 'lib/types/order';
import React, { Dispatch, useEffect, useState } from 'react';

export type ShoppingCartContextProps = {
  orderQuantity: number;
  setOrderQuantity: (quantity: number) => void;
};

export const ShoppingCartContext =
  React.createContext<ShoppingCartContextProps>({} as ShoppingCartContextProps);

ShoppingCartContext.displayName = 'ShoppingCart';

export const ShoppingCartProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [orderQuantity, setOrderQuantity] = useState(0);
  const { data } = useQuery<GetActiveOrderResponse>(GET_ACTIVE_ORDER);

  useEffect(() => {
    if (data?.activeOrder) {
      setOrderQuantity(data.activeOrder.totalQuantity);
    }
  }, [data]);

  return (
    <ShoppingCartContext.Provider value={{ orderQuantity, setOrderQuantity }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => {
  const context = React.useContext(ShoppingCartContext);

  if (context === undefined) {
    throw new Error(
      `useShoppingCart must be used within a ShoppingCartProvider`
    );
  }

  return context;
};
