/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Account {
  id: string;
  name: string;
  accountNumber: string;
  initialBalance: number;
}

interface AccountState {
  lastCreatedAccount: Account | null;
  accounts: Record<string, Account>;
}

const initialState: AccountState = {
  lastCreatedAccount: null,
  accounts: {},
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    createAccount(state, action: PayloadAction<Account>) {
      state.lastCreatedAccount = action.payload;
      state.accounts[action.payload.id] = action.payload;
    },
    updateBalance(state, action: PayloadAction<{ accountId: string; newBalance: number }>) {
      const account = state.accounts[action.payload.accountId];

      if (account) {
        account.initialBalance = action.payload.newBalance;
        if (state.lastCreatedAccount?.id === action.payload.accountId) {
          state.lastCreatedAccount.initialBalance = action.payload.newBalance;
        }
      }
    },
  },
});

export const { createAccount, updateBalance } = accountSlice.actions;

export default accountSlice.reducer;
