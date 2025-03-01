import { Link } from "react-router-dom";
import React from 'react';
import { useTranslation } from 'react-i18next';
import "./NavigationMenu.css";

const NavigationMenu = () => {
  const { t } = useTranslation();

  return (
    <nav className="Search-Bar">
      <ul>
        <li><Link to="/info">{t("navigationMenu.info")}</Link></li>
        <li><Link to="/technicalsupport">{t("navigationMenu.help")}</Link></li>
        <li><Link to="/community">{t("navigationMenu.community")}</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;