import React from 'react';
import './InfoWeb.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Iconos de redes sociales
import { useTranslation } from 'react-i18next';

const InfoWeb = () => {
  const { t } = useTranslation();

  return (
    <div className="info-container">
      <div className="header-container">
        <h1 className="company-title">{t("infoWeb.companyTitle")}</h1>
      </div>

      <div className="description-container">
        <p>{t("infoWeb.description")}</p>
      </div>

      <div className="social-media-container">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook className="social-icon" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter className="social-icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className="social-icon" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="social-icon" />
        </a>
      </div>

      <div className="footer-container">
        <p className="copyright">
          &copy; {new Date().getFullYear()} {t("infoWeb.copyright")}
        </p>
      </div>
    </div>
  );
};

export default InfoWeb;