import { ProductInCart } from '../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setToLocalStorage } from '../utils';

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
        setToLocalStorage('cartItems', state.products);
      }
    },
    removeProduct(state, { payload }: PayloadAction<{ id: string }>) {
      state.products = state.products.filter((p) => p.id !== payload.id);
      setToLocalStorage('cartItems', state.products);
    },
    increaseProductCount(state, { payload }: PayloadAction<{ id: string }>) {
      state.products.map((p) => {
        if (p.id === payload.id) p.count++;
        return p;
      });
      setToLocalStorage('cartItems', state.products);
    },
    decreaseProductCount(state, { payload }: PayloadAction<{ id: string }>) {
      state.products.map((p) => {
        if (p.id === payload.id) p.count--;
        return p;
      });
      setToLocalStorage('cartItems', state.products);
    }
  },
});

const cartReducer = cartSlice.reducer;

// Actions
const addProduct = cartSlice.actions.addProduct;
const removeProduct = cartSlice.actions.removeProduct;
const increaseProductCount = cartSlice.actions.increaseProductCount;
const decreaseProductCount = cartSlice.actions.decreaseProductCount;

export {
  cartReducer,
  addProduct,
  removeProduct,
  increaseProductCount,
  decreaseProductCount
};
