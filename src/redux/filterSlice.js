import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "all",
  withRating: 0,
  searchQ: "",
  sortByName: false,
  sortByPrice: false,
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    sortByName: (state, action) => {
      action.payload === "a"
        ? (state.sortByName = "a")
        : (state.sortByName = "d");
      state.sortByPrice = false;
      return;
    },
    sortByPrice: (state, action) => {
      action.payload === "a"
        ? (state.sortByPrice = "a")
        : (state.sortByPrice = "d");
      state.sortByName = false;
      return;
    },
    withRating: (state, action) => {
      state.withRating = action.payload + 1;
      return;
    },

    categorize: (state, action) => {
      state.category = action.payload;
      return;
    },
    setSearchQ: (state, action) => {
      state.searchQ = action.payload;
      return;
    },
    clearFilters: (state) => {
      return {
        ...state,
        category: "all",
        withRating: 0,
        searchQ: "",
        sortByName: false,
        sortByPrice: false,
      };
    },
  },
});

export const {
  sortByName,
  sortByPrice,
  withRating,
  categorize,
  clearFilters,
  setSearchQ,
} = filterSlice.actions;

export default filterSlice.reducer;
