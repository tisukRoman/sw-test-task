import { Price } from '../types';

export const getActivePrice = (prices: Price[], activeLabel: string) => {
  return prices.find((price) => price.currency.label === activeLabel);
};
