import { Price } from './Price';

export type ProductInCart = {
  id: string;
  name: string;
  brand: string;
  inStock: boolean;
  gallery: string[];
  description: string;
  category: string;
  selectedAttributes: {
    [name: string]: string;
  } | null;
  prices: Price[];
  count: number;
};
