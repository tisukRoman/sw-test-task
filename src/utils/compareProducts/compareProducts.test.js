import { compareProducts } from './compareProducts';

const sneakers1 = {
  id: 'sneakers',
  selectedAttributes: {
    Size: 'xs',
  },
  count: 1,
};

const sneakers2 = {
  id: 'sneakers',
  selectedAttributes: {
    Size: 'm',
  },
  count: 1,
}

const bag = {
  id: 'bag',
  selectedAttributes: {
    Size: 'xs',
  },
  count: 1,
}

const laptop = {
  id: 'laptop',
  selectedAttributes: null,
  count: 1,
}

describe('compareProducts', () => {
  it('should return true if id and selected attributes are equal', () => {
    expect(compareProducts(sneakers1, { ...sneakers1 })).toBe(true);
  });

  it('should return false if id are different', () => {
    expect(compareProducts(sneakers1, bag)).toBe(false);
    expect(compareProducts(laptop, bag)).toBe(false);
  });

  it('should return false if id are same but selected attributes are different', () => {
    expect(compareProducts(sneakers1, sneakers2)).toBe(false);
  });

  it('should return true if id are same and products don`t have attributes', () => {
    expect(compareProducts(laptop, { ...laptop })).toBe(true);
  });
});
