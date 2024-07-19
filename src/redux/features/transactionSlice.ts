import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Transaction {
  id: string;
  type: "deposito" | "transferencia";
  amount: number;
}

interface TransactionState {
  transactions: Record<string, Transaction[]>;
  loading: boolean;
  error: string | null;
}

const initialState: TransactionState = {
  transactions: {},
  loading: false,
  error: null,
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    createTransactionStart(state) {
      state.loading = true;
      state.error = null;
    },
    createTransactionSuccess(state, action: PayloadAction<{ accountId: string; transactions: Transaction[] }>) {
      state.transactions[action.payload.accountId] = action.payload.transactions;
      state.loading = false;
    },
    createTransactionFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { createTransactionStart, createTransactionSuccess, createTransactionFailure } = transactionSlice.actions;

export default transactionSlice.reducer;
