const defaultOptions = {
  currency: 'USD',
  style: 'currency',
  minimumFractionDigits: 0,
};

export const formatPrice = (
  price: number,
  options: Record<string, string | number | boolean> = defaultOptions
): string =>
  price || price === 0
    ? new Intl.NumberFormat('en-US', options).format(price)
    : '';
