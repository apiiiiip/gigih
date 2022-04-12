import searchSlice from "./Searchslice";
import accountSlice from "./Accountslice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    search: searchSlice,
    account: accountSlice,
  },
});
