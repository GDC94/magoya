import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface BalanceState {
  balances: Record<string, number>;
  loading: boolean;
  error: string | null;
}

const initialState: BalanceState = {
  balances: {},
  loading: false,
  error: null,
};

const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    fetchBalanceStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchBalanceSuccess(state, action: PayloadAction<{ accountId: string; balance: number }>) {
      state.balances[action.payload.accountId] = action.payload.balance;
      state.loading = false;
    },
    fetchBalanceFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchBalanceStart, fetchBalanceSuccess, fetchBalanceFailure } = balanceSlice.actions;

export default balanceSlice.reducer;
