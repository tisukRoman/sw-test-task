import { ProductInCart } from '../../types'

export const compareProducts = (obj1: ProductInCart, obj2: ProductInCart) => {
  const idAreEqual = obj1.id === obj2.id;

  if (idAreEqual) {
    return Object.keys({
      ...obj1.selectedAttributes,
      ...obj2.selectedAttributes,
    }).every((key) => {
      if (obj1.selectedAttributes && obj2.selectedAttributes) {
        return obj1.selectedAttributes[key] === obj2.selectedAttributes[key];
      } else return false;
    });
  } else {
    return false;
  }
};
