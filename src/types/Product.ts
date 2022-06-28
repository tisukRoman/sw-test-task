import { Price } from './Price';

export type Product = {
  __typename: 'Product';
  id: string;
  name: string;
  brand: string;
  inStock: boolean;
  gallery: string[];
  prices: Price[];
};
