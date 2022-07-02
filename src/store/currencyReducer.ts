import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setToLocalStorage } from '../utils';

export type CurrencyState = {
  symbol: string;
  label: string;
};

const initialState: CurrencyState = {
  label: 'USD',
  symbol: '$',
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrency(state, { payload }: PayloadAction<CurrencyState>) {
      setToLocalStorage('currency', payload);
      return {...payload};
    },
  },
});

const currencyReducer = currencySlice.reducer;

// Actions

const setCurrency = currencySlice.actions.setCurrency;

export { currencyReducer, setCurrency };
