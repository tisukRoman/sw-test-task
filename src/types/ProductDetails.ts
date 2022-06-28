import { Attribute } from './Attribute';
import { Price } from './Price';

export type ProductDetails = {
  id: string;
  name: string;
  brand: string;
  inStock: boolean;
  gallery: string[];
  description: string;
  category: string;
  attributes: Attribute[];
  prices: Price[];
};
