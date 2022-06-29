import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
      return {...payload};
    },
  },
});

const currencyReducer = currencySlice.reducer;

// Actions

const setCurrency = currencySlice.actions.setCurrency;

export { currencyReducer, setCurrency };
