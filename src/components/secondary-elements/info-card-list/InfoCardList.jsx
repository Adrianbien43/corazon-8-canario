import React from "react";
import InfoCard from "../info-card/InfoCard";
import "./InfoCardList.css"; // Verifica que esta ruta sea correcta

const InfoCardList = ({ infoData }) => {
  return (
    <div className="info-card-list">
      {infoData.map((item, index) => (
        <InfoCard key={index} {...item} />
      ))}
    </div>
  );
};

export default InfoCardList;
