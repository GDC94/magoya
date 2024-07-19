import { configureStore } from "@reduxjs/toolkit";

import balanceReducer from "./features/balanceSlice";
import transactionReducer from "./features/transactionSlice";
import accountReducer from "./features/accountSlice";

export const store = configureStore({
  reducer: {
    balance: balanceReducer,
    transaction: transactionReducer,
    account: accountReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
