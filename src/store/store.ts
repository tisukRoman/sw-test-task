import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
