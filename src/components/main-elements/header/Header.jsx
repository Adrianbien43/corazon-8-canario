import './Header.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LOGO from "../../../assets/LOGO.png";
import { FaFlag, FaFlagUsa, FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const handleHomeClick = () => {
    navigate('/');
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
    setIsLanguageMenuOpen(false);
  };

  const getCurrentFlag = () => {
    switch (i18n.language) {
      case 'es':
        return <FaFlag size={20} />;
      case 'en':
        return <FaFlagUsa size={20} />;
      default:
        return <FaFlag size={20} />;
    }
  };

  return (
    <header>
      <div className="head-title">
        <img src={LOGO} alt="Company Logo" className="logo" />
        <h1 onClick={handleHomeClick} style={{ cursor: 'pointer' }}>
          <span className="invisible">|</span>
          <span className="magic-text">{t("heart")}</span>
          <span className="text-x">8</span>
          <span className="logic-text">{t("canary")}</span>
          <span className="invisible">|</span>
        </h1>
      </div>

      <div className="language-selector">
        <button
          className="language-button"
          onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
        >
          {getCurrentFlag()}
          <FaChevronDown size={12} />
        </button>

        {isLanguageMenuOpen && (
          <div className="language-menu">
            <button onClick={() => changeLanguage('es')}>
              <FaFlag size={20} /> {t("spanish")}
            </button>
            <button onClick={() => changeLanguage('en')}>
              <FaFlagUsa size={20} /> {t("english")}
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;