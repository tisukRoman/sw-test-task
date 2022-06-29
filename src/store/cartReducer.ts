import { ProductInCart } from '../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CartState = {
  products: ProductInCart[];
};

const initialState: CartState = {
  products: [
    {
      attributes: [
        {
          id: 'Color',
          name: 'Color',
          type: 'swatch',
          items: [
            { displayValue: 'Green', value: '#44FF03', id: 'Green' },
            { displayValue: 'Cyan', value: '#03FFF7', id: 'Cyan' },
            { displayValue: 'Blue', value: '#030BFF', id: 'Blue' },
            { displayValue: 'Black', value: '#000000', id: 'Black' },
            { displayValue: 'White', value: '#FFFFFF', id: 'White' },
          ],
        },
        {
          id: 'Capacity',
          items: [
            { displayValue: '512G', value: '512G', id: '512G' },
            { displayValue: '1T', value: '1T', id: '1T' },
          ],
          name: 'Capacity',
          type: 'text',
        },
      ],
      brand: 'Microsoft',
      gallery: [
        'https://images-na.ssl-images-amazon.com/images/I/71vPCX0bS-L._SL1500_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/71q7JTbRTpL._SL1500_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/71iQ4HGHtsL._SL1500_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/61IYrCrBzxL._SL1500_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/61RnXmpAmIL._SL1500_.jpg',
      ],
      id: 'xbox-series-s',
      inStock: false,
      name: 'Xbox Series S 512GB',
      prices: [
        {
          __typename: 'Price',
          currency: {
            __typename: 'Currency',
            label: 'USD',
            symbol: '$',
          },
          amount: 100,
        },
      ],
      selectedAttributes: { Color: '#44FF03', Capacity: '512G' },
      count: 2,
    },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, { payload }: PayloadAction<ProductInCart>) {
      const existedProduct = state.products.find((p) => p.id === payload.id);
      if (!existedProduct) {
        state.products = [...state.products, payload];
      }
    },
    removeProduct(state, { payload }: PayloadAction<{ id: string }>) {
      state.products = state.products.filter((p) => p.id !== payload.id);
    },
  },
});

const cartReducer = cartSlice.reducer;

// Actions
const addProduct = cartSlice.actions.addProduct;
const removeProduct = cartSlice.actions.removeProduct;

export { cartReducer, addProduct, removeProduct };
