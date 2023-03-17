import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const tokenSlice = createSlice({
  name: "token",
  initialState: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : initialState,
  reducers: {
    save: (state, action) => {
      localStorage.setItem("token", JSON.stringify(action.payload));
      state.value = action.payload;
    },
    clean: () => {
      state.value = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { save, clean } = tokenSlice.actions;

export default tokenSlice.reducer;
