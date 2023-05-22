import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import i18next from "i18next";
import HttpApi from "i18next-http-backend";
import { initReactI18next, I18nextProvider } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { ModalContextProvider } from "./context";

import { Loading } from "./UI/Loading/Loading";
import App from "./components/App";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./css/index.css";

//Localisaton
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    lng: "en",
    supportedLngs: ["en", "ru", "fr"],
    fallbackLng: "fr",
    detection: {
      order: ["cookie", "localStorage", "htmlTag", "path", "subdomain"],
      caches: ["cookie"]
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json"
    }
  });

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Suspense fallback={<Loading />}>
    <I18nextProvider i18n={i18next}>
      <ModalContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ModalContextProvider>
    </I18nextProvider>
  </Suspense>
);
