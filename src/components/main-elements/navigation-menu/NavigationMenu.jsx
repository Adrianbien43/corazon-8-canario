
import { Link } from "react-router-dom";
import React from 'react';
import "./NavigationMenu.css";

const NavigationMenu = () => {
  return (
    <nav className="Search-Bar">
      <ul>
        <li><Link to="/info">Info</Link></li>
        <li><Link to="/technicalsupport">Ayuda</Link></li>
        <li><Link to="/community">Comunidad</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationMenu