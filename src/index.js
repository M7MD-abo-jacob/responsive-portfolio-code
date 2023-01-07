import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "flag-icon-css/css/flag-icons.min.css";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import App from "./App.js";
import store from "./redux/store";
import HttpApi from "i18next-http-backend";
import en from "./data/locales/en/translation.js";
import ar from "./data/locales/ar/translation.js";
// import "./index.css";
import "./index.scss";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: en,
      },
      ar: {
        translation: ar,
      },
    },
    // lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    detection: {
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
  });

const LoadingComponent = (
  <div className="text-center">
    <h1 className="h1">Loading...</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={LoadingComponent}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>
);
