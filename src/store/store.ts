import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { getFromLocalStorage } from '../utils';
import { cartReducer } from './cartReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
});

const initialState = {
  cart: {
    products: getFromLocalStorage('cartItems', [])
  },
};

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
