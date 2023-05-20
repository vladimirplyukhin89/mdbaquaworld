import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import i18next from "i18next";
import HttpApi from "i18next-http-backend";
import { initReactI18next, I18nextProvider } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import App from "./components/App";

//Localisaton
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    lng: "fr",
    supportedLngs: ["en", "ru", "fr"],
    fallbackLng: "en",
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
  <Suspense fallback={<div>Loading...</div>}>
    <I18nextProvider i18n={i18next}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </I18nextProvider>
  </Suspense>
);
