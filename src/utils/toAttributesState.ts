import { Attribute } from '../types';

export const toAttributesState = (attributes: Attribute[]) => {
  return attributes.reduce((acc, attr) => {
    return { ...acc, [attr.name]: attr.items[0].value };
  }, {});
};
