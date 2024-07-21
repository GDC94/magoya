import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AccountState {
  accounts: Record<
    number,
    {
      id: number;
      name: string;
      accountNumber: string;
      initialBalance: string;
    }
  >;
  loading: boolean;
  error: string | null;
  lastCreatedAccount: {
    id: number | null;
    name: string;
    accountNumber: string;
  } | null; 
}

const initialState: AccountState = {
  accounts: {},
  loading: false,
  error: null,
  lastCreatedAccount: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    createAccountStart(state) {
      state.loading = true;
      state.error = null;
    },
    createAccountSuccess(
      state,
      action: PayloadAction<{
        id: number;
        name: string;
        accountNumber: string;
        initialBalance: string;
      }>,
    ) {
      const { id, ...accountData } = action.payload;

      state.accounts[id] = { id, ...accountData };
      state.lastCreatedAccount = {
        id,
        name: accountData.name,
        accountNumber: accountData.accountNumber,
      };
      state.loading = false;
    },
    createAccountFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { createAccountStart, createAccountSuccess, createAccountFailure } = accountSlice.actions;

export default accountSlice.reducer;
