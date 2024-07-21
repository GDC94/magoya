/* eslint-disable @typescript-eslint/no-unnecessary-condition */
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
  newBalance: number | null; // Para almacenar el nuevo saldo
}

const initialState: TransactionState = {
  transactions: {},
  loading: false,
  error: null,
  newBalance: null,
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    createTransactionStart(state) {
      state.loading = true;
      state.error = null;
    },
    createTransactionSuccess(state, action: PayloadAction<{ message: string; newBalance: number }>) {
      state.newBalance = action.payload.newBalance; // Almacena el nuevo saldo
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
