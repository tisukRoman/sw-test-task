import { ProductInCart } from '../types';
import { createSlice } from '@reduxjs/toolkit';

type CartState = {
  products: ProductInCart[];
};

const initialState: CartState = {
  products: [],
};

const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});

export default cartReducer.reducer;
