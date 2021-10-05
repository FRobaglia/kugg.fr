import React from "react";
import { useTranslation } from "react-i18next";
import LanguageHandler from "./LanguageHandler";

function Header() {
  const { t } = useTranslation();

  return (
    <header>
      <h1 className="name">
        Félix Robaglia <span>— {t("jobTitle")}</span>
      </h1>
      

      <address>
        <a style={{marginRight: 0}} href="./cv.html"> CV </a>  |&nbsp;
        <a href="mailto:felix.robaglia@gmail.com">
          felix.robaglia@gmail.com
        </a>
        <a
          className="social twitter"
          title="Twitter | Félix Robaglia"
          href="https://twitter.com/FRobaglia"
        ></a>
        <a
          className="social github"
          title="GitHub | Félix Robaglia"
          href="https://github.com/FRobaglia"
        ></a>
        <LanguageHandler />
      </address>
    </header>
  );
}

export default Header;
