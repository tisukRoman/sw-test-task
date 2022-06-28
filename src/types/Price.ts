import { Currency } from './Currency';

export type Price = {
  __typename: 'Price';
  currency: Currency;
  amount: number;
};
