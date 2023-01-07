import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn:
    localStorage.getItem("loggedIn") !== null
      ? JSON.parse(localStorage.getItem("loggedIn"))
      : false,
  isDarkTheme:
    localStorage.getItem("isDarkTheme") !== null
      ? JSON.parse(localStorage.getItem("isDarkTheme"))
      : false,
  mainColor:
    localStorage.getItem("mainColor") != null
      ? JSON.parse(localStorage.getItem("mainColor"))
      : "goldenish",
  language:
    localStorage.getItem("language") != null
      ? JSON.parse(localStorage.getItem("language"))
      : "en",
  cartIsOpen: false,
  pageTop: "home",
};
export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      localStorage.setItem("loggedIn", JSON.stringify(action.payload));
      return { ...state, loggedIn: action.payload };
    },
    toggleTheme: (state) => {
      let newTheme = !state.isDarkTheme;
      localStorage.setItem("isDarkTheme", JSON.stringify(newTheme));
      return { ...state, isDarkTheme: newTheme };
    },
    setMainColor: (state, action) => {
      localStorage.setItem("mainColor", JSON.stringify(action.payload));
      return { ...state, mainColor: action.payload };
    },
    setCartIsOpen: (state, action) => {
      return { ...state, cartIsOpen: action.payload };
    },
    setLanguage: (state, action) => {
      localStorage.setItem("language", JSON.stringify(action.payload));
      return { ...state, language: action.payload };
    },
    setPageTop: (state, action) => {
      return { ...state, pageTop: action.payload };
    },
  },
});

export const {
  setLoggedIn,
  setCartIsOpen,
  toggleTheme,
  setLanguage,
  setMainColor,
  setPageTop,
} = generalSlice.actions;

export default generalSlice.reducer;
