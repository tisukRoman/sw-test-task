import { Attribute } from './Attribute';
import { Price } from './Price';

export type ProductInCart = {
  id: string;
  name: string;
  brand: string;
  inStock: boolean;
  gallery: string[];
  attributes: Attribute[];
  prices: Price[];

  selectedAttributes: {[name: string]: string} | null;
  count: number;
};
