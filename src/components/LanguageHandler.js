import React, { useState, useEffect } from "react";
import i18n from "i18next";

function LanguageHandler() {

const [lang, setLang] = useState(i18n.language)

  useEffect(() => {
      i18n.changeLanguage(lang)
  }, [lang]);

  function handleClick(value) {
      setLang(value)
  }

  return (
      <div className="language-handler">
          {lang === "en" &&
            <button onClick={() => handleClick("fr")} className="flag flag-fr"></button>
          }
          {lang === "fr" &&
            <button onClick={() => handleClick("en")} className="flag flag-en"></button>
          }
      </div>
  );
}

export default LanguageHandler;
