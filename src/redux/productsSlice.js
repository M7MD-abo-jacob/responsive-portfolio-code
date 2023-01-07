import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      return { ...state, value: action.payload };
    },
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
