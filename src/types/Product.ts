import { Attribute } from './Attribute';
import { Price } from './Price';

export type Product = {
  id: string;
  name: string;
  brand: string;
  inStock: boolean;
  gallery: string[];
  prices: Price[];
  attributes: Attribute[];
};
