import { AttributeItem } from './AttributeItem';

export type Attribute = {
  id: string;
  name: string;
  type: string;
  items: AttributeItem[];
};
