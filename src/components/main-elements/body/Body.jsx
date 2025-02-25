import React from 'react';
import "./Body.css";

const Body = ({ children }) => {
  return (
    <div className="body-container">
      <div className="bubbles">
        {[...Array(150)].map((_, i) => (
          <span key={i} style={{ "--i": Math.floor(Math.random() * 70) }}></span>
        ))}
      </div>
      <div className="body-content">{children}</div>
    </div>
  );
};

export default Body;
