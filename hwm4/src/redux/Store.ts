import searchSlice from "./Searchslice";
import accountSlice from "./Accountslice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  search: searchSlice,
  account: accountSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
