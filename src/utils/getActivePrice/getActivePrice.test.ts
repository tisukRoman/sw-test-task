import { getActivePrice } from './getActivePrice';

const prices = [
  {
    currency: {
      label: 'USD',
      symbol: '$',
    },
    amount: 234,
  },
  {
    currency: {
      label: 'AUD',
      symbol: 'A$',
    },
    amount: 100,
  },
];

describe('getActivePrice', () => {
  it('should return active price object', () => {
    expect(getActivePrice(prices, 'USD')).toEqual(prices[0]);
    expect(getActivePrice(prices, 'AUD')).toEqual(prices[1]);
  });
  it('should return undefined if no active price is found', () => {
    expect(getActivePrice(prices, 'RUB')).toBe(undefined);
  });
});
