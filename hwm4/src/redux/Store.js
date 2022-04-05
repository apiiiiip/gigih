import searchSlice from "./Searchslice";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
        search:searchSlice}
});