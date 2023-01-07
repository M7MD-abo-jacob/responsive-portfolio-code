import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import generalSlice from "./generalSlice";
import productReducer from "./productsSlice";
import filterSlice from "./filterSlice";

const store = configureStore({
  reducer: {
    general: generalSlice,
    products: productReducer,
    filters: filterSlice,
    cart: cartReducer,
  },
});

export default store;
