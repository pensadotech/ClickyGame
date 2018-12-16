import React from 'react';
import "./Footer.css";

const Footer = (props) => (
  <div className="footer d-flex">
    <div className="p-2"> 
      <h4>Clicky Game!</h4> 
    </div>
    <div className="p-2"> 
      <img className="footerImg" src="./favicon.ico" alt="React">
      </img>
    </div>
  </div>
);

export default Footer;