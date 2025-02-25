import React from 'react';
import './FooterCanva.css';
import InfoComponent from '../webinformarion/WebInformation';
import FormValidation from '../formwithvalidation/FormValidation';

const FooterCanva = () => {
  return (
    <footer className="footer-container">
      <div className='container-element'>
        <div className='container-info'>
          <InfoComponent />
        </div>
        <div className='container-form'>
          <FormValidation />
        </div>
      </div>
    </footer>
  );
};

export default FooterCanva;
