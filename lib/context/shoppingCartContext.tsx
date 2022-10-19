import useStateWithStorage from 'lib/hooks/useLocalStorage';
import { Order } from 'lib/types/order';
import React, { Dispatch } from 'react';

export type ShoppingCartContextProps = {
  order: Order;
  setOrder: (order: Order) => void;
};

export const ShoppingCartContext =
  React.createContext<ShoppingCartContextProps>({} as ShoppingCartContextProps);

ShoppingCartContext.displayName = 'ShoppingCart';

export const ShoppingCartProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [order, setOrder] = useStateWithStorage('order', null);

  return (
    <ShoppingCartContext.Provider value={{ order, setOrder }}>
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
