import React from "react";
import { Link } from "react-router-dom";
import "./InfoCard.css"; // Verifica que la ruta al CSS sea correcta

const InfoCard = ({ title, image, subtitle, text, link }) => {

  return (
    <div className="info-card">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <Link to={link}>{subtitle}</Link>
      <p>{text}</p>
    </div>
  );
};

export default InfoCard;
