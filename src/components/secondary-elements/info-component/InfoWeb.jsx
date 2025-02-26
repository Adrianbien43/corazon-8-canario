import React from 'react';
import './InfoWeb.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Iconos de redes sociales

const InfoWeb = () => {
  return (
    <div className="info-container">

      <div className="header-container">
        <h1 className="company-title">PARAÍSO 8 CANARIO</h1>
      </div>


      <div className="description-container">
        <p>
          Soy un joven emprendedor con el objetivo de contribuir al crecimiento y la prosperidad de nuestro querido archipiélago Canario.
          Me comprometo a crear páginas web para los establecimientos locales de nuestras islas, ayudándoles a ser más competitivos y a
          aumentar la visibilidad de los productos y servicios que ofrecen. Mi meta es que todos los pequeños negocios de la isla cuenten
          con una plataforma digital donde puedan darse a conocer al mundo exterior.
        </p>
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
          &copy; {new Date().getFullYear()} Paraíso 8 Canario. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
};

export default InfoWeb;