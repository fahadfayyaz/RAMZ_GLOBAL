import { i18n, useTranslation } from "../../i18n";
import React, { useState, useContext } from "react";

export default ({ MenuDropdown, isDark }) => {
  const { t } = useTranslation();

  return (
    <li className="nav-item">
      <a
        className="nav-link"
        role="button"
        data-toggle="dropdown"
        aria-expanded="false"
        href={`/${i18n.language === "en" ? "de" : "en"}`}
        onClick={(e) => {
          e.preventDefault();
          i18n.changeLanguage(i18n.language === "en" ? "de" : "en");
        }}
      >
        {i18n.language === "en" ? "German" : "English"}
      </a>
      {/* <MenuDropdown
        className="menu-dropdown dropdown-right"
        dark={isDark ? 1 : 0}
      >
        <li className="drop-menu-item">
          <a href="/#" onClick={(e) => i18n.changeLanguage("en")}>
            English
          </a>
        </li>
        <li className="drop-menu-item">
          <a>German</a>
        </li>
      </MenuDropdown> */}
    </li>
  );
};
