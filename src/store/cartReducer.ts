import { ProductInCart } from '../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CartState = {
  products: ProductInCart[];
};

const initialState: CartState = {
  products: [],
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
