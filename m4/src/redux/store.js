import { searchSlice } from "./Searchslice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
    search: searchSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
});