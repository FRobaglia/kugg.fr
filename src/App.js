import React from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import translations from "./translations.js";

import Header from "./components/Header.js";
import ProjectArea from "./components/ProjectArea";


i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: translations,
    supportedLngs: ["fr", "en"],
    whitelist: ["fr", "en"],
    preload: ["fr", "en"],
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

function App() {

  return (
    <>
      <Header />
      <ProjectArea />
    </>
  );
}

export default App;
