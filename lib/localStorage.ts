import { Order } from './types/order';

const SHOPPING_CART_KEY = 'cart';

export const updateShoppingCart = (order: Order) => {
  localStorage.setItem(SHOPPING_CART_KEY, JSON.stringify(order));
};

export const getShoppingCart = (): { shoppingCart: Order | null } => {
  const shoppingCart = localStorage.getItem(SHOPPING_CART_KEY);
  return shoppingCart ? JSON.parse(shoppingCart) : null;
};

export const getLocalStorage = (key: string, defaultValue: unknown) => {
  if (typeof window === 'undefined') return;
  const localStorageContent = localStorage.getItem(key);

  if (localStorageContent) {
    return JSON.parse(localStorageContent);
  } else {
    return defaultValue;
  }
};
