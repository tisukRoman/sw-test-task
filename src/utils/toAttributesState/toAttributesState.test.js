import { toAttributesState } from './toAttributesState';

const attributesArr = [
  {
    id: '1',
    name: 'size',
    type: 'size',
    items: [
      {
        displayValue: 'xs',
        value: 'xs',
        id: 1,
      },
      {
        displayValue: 'm',
        value: 'm',
        id: 2,
      },
      {
        displayValue: 's',
        value: 's',
        id: 3,
      },
    ],
  },
];

describe('toAttributesState', () => {
  it('should create object with default attribute values', () => {
    expect(toAttributesState(attributesArr)).toEqual({
      size: 'xs',
    });
  });
  it('should take the first item as the default value', () => {
    expect(toAttributesState(attributesArr)).toEqual({
      size: 'xs',
    });
    expect(toAttributesState(attributesArr)).not.toEqual({
      size: 'm',
    });
  })
  it('should return empty object if no attributes', () => {
    expect(toAttributesState([])).toEqual({});
  })
});
