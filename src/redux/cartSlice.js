import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    removeFromCart: (state, action) => {
      state.value.splice(
        state.value.findIndex((prod) => prod.id === action.payload.id),
        1
      );
    },
    minusOne: (state, action) => {
      const i = state.value.findIndex((prod) => prod.id === action.payload.id);
      state.value[i].count <= 1 ? console.log(i) : (state.value[i].count -= 1);
    },
    plusOne: (state, action) => {
      const i = state.value.findIndex((prod) => prod.id === action.payload.id);
      state.value[i].count += 1;
    },
    setNum: (state, action) => {
      const i = state.value.findIndex((prod) => prod.id === action.payload.id);
      action.payload.count > 0
        ? (state.value[i].count = action.payload.count)
        : console.log("can't do that");
    },
    clearAll: (state) => {
      state.value = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  plusOne,
  minusOne,
  setNum,
  clearAll,
} = cartSlice.actions;

export default cartSlice.reducer;
