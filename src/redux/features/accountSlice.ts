import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AccountState {
  accounts: Record<string, { id: string; name: string; accountNumber: string }>;
  loading: boolean;
  error: string | null;
}

const initialState: AccountState = {
  accounts: {},
  loading: false,
  error: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    createAccountStart(state) {
      state.loading = true;
      state.error = null;
    },
    createAccountSuccess(state, action: PayloadAction<{ id: string; name: string; accountNumber: string }>) {
      state.accounts[action.payload.id] = action.payload;
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
