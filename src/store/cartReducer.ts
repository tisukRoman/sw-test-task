import { ProductInCart } from '../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { compareProducts, setToLocalStorage } from '../utils';

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
      const existedProduct = state.products.find((product) =>
        compareProducts(product, payload)
      );
      if (existedProduct) {
        state.products.map((product) => {
          if (compareProducts(product, payload)) product.count++;
          return product;
        });
      } else {
        state.products.push(payload);
      }
      setToLocalStorage('cartItems', state.products);
    },
    removeProduct(state, { payload }: PayloadAction<ProductInCart>) {
      state.products = state.products.filter(
        (product) => !compareProducts(product, payload)
      );
      setToLocalStorage('cartItems', state.products);
    },
    increaseProductCount(state, { payload }: PayloadAction<ProductInCart>) {
      state.products.map((product) => {
        if (compareProducts(product, payload)) product.count++;
        return product;
      });
      setToLocalStorage('cartItems', state.products);
    },
    decreaseProductCount(state, { payload }: PayloadAction<ProductInCart>) {
      state.products.map((product) => {
        if (compareProducts(product, payload)) product.count--;
        return product;
      });
      setToLocalStorage('cartItems', state.products);
    },
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
  decreaseProductCount,
};
