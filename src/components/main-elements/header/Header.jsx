import './Header.css';
import React from 'react';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    console.log("Clic en el título - navegando a Home");
    navigate('/');
  };


  return (
    <header>
      <div className="head-title">
        <h1 onClick={handleHomeClick} style={{ cursor: 'pointer' }}>
          <span className="invisible">|</span>
          <span className="magic-text"> CORAZÓN</span>
          <span className="text-x">8</span>
          <span className="logic-text">CANARIO </span>
          <span className="invisible">|</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;