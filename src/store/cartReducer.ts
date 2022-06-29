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
    increaseProductCount(state, { payload }: PayloadAction<{ id: string }>) {
      state.products.map((p) => {
        if (p.id === payload.id) p.count++;
        return p;
      });
    },
    decreaseProductCount(state, { payload }: PayloadAction<{ id: string }>) {
      state.products.map((p) => {
        if (p.id === payload.id) p.count--;
        return p;
      });
    },
    selectProductAttributeValue(state, { payload }: PayloadAction<{ id: string, name: string, value: string}>){
      state.products.map((p) => {
        if (p.id === payload.id && p.selectedAttributes) {
          p.selectedAttributes[payload.name] = payload.value;
        }
        return p;
      });
    }
  },
});

const cartReducer = cartSlice.reducer;

// Actions
const addProduct = cartSlice.actions.addProduct;
const removeProduct = cartSlice.actions.removeProduct;
const increaseProductCount = cartSlice.actions.increaseProductCount;
const decreaseProductCount = cartSlice.actions.decreaseProductCount;
const selectProductAttributeValue = cartSlice.actions.selectProductAttributeValue;

export {
  cartReducer,
  addProduct,
  removeProduct,
  increaseProductCount,
  decreaseProductCount,
  selectProductAttributeValue
};
