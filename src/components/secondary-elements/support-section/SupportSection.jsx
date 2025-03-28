import React from 'react';
import './SupportSection.css'; // Archivo CSS para los estilos

const SupportSection = () => {
  return (
    <div className="support-container">
      <div className="content-infoSuppor">
        <h1>¡HOLA!</h1>
        <p>
          En esta sección puedes realizar preguntas relacionadas con la aplicación web o reportar cualquier mensaje de error que hayas encontrado. Si deseas ponerte en contacto conmigo por algún proyecto, por favor, envíame un correo electrónico directamente para garantizar la privacidad.
        </p>
        <h3>¡Espero que tengas un excelente día! Quedo atento a tu mensaje.</h3>
      </div>


      <div className="icon-container">
        <a href="https://wa.me/tunumero" target="_blank" rel="noopener noreferrer" className="icon whatsapp">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="mailto:tucorreo@example.com" className="icon email">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://twitter.com/tucuenta" target="_blank" rel="noopener noreferrer" className="icon twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://discord.gg/tuinvitacion" target="_blank" rel="noopener noreferrer" className="icon discord">
          <i className="fab fa-discord"></i>
        </a>
      </div>
    </div>
  );
};

export default SupportSection;