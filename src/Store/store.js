import { configureStore } from "@reduxjs/toolkit";
import tokenReduce from "./User/tokenSlice";

export const store = configureStore({
  reducer: {
    token: tokenReduce,
  },
});
