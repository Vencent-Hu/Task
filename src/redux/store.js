import { configureStore } from "@reduxjs/toolkit";
import uniTableReducer from "./dataSlice";

export default configureStore({
  reducer: {
    uniTable: uniTableReducer,
  },
});
