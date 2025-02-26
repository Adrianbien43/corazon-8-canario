import React from 'react';
import './FooterCanva.css';

import InfoWeb from '../../secondary-elements/info-component/InfoWeb';
import ValidationFrom from '../../secondary-elements/validation-form/ValidationFrom';

const FooterCanva = () => {
  return (
    <footer className="footer-container">
      <div className='container-element'>
        <div className='container-info'>
          <InfoWeb></InfoWeb>
        </div>
        <div className='container-form'>
          <ValidationFrom></ValidationFrom>
        </div>
      </div>
    </footer>
  );
};

export default FooterCanva;
