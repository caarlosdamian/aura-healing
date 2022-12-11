import React from "react";
import AuraLogo from "../../images/aura-footer.png";
import Instagram from "../../images/icon-instagram.svg";
import Facebook from "../../images/icon-facebook.svg";
import Twitter from "../../images/icon-twitter.svg";
import Pinterest from "../../images/icon-pinterest.svg";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top-container">
      <img src={AuraLogo} alt="AuraLogo" className="footer-logo" />
      <div className="footer-social-container">
        <img src={Facebook} alt="Facebook" className="social-img" />
        <img src={Twitter} alt="Twitter" className="social-img" />
        <img src={Pinterest} alt="Pinterest" className="social-img" />
        <img src={Instagram} alt="Instagram" className="social-img" />
      </div>
      </div>
    
      <hr className="footer-line" />
      <div className="footer-content-container">
        <div className="footer-content-wrapper">
          <h1 className="footer-content-title">Our Company</h1>
          <div className="footer-container-inner-container">
            <span className="footer-content">Puebla</span>
            <span className="footer-content">Instaragm</span>
            <span className="footer-content">Mexico</span>
          </div>
        </div>
        <div className="footer-content-wrapper">
          <h1 className="footer-content-title">Contacto</h1>
          <div className="footer-container-inner-container">
            <span className="footer-content">Puebla</span>
            <span className="footer-content">Instaragm</span>
            <span className="footer-content">Mexico</span>
          </div>
        </div>
        <div className="footer-content-wrapper">
          <h1 className="footer-content-title">Recursos</h1>
          <div className="footer-container-inner-container">
            <span className="footer-content">Puebla</span>
            <span className="footer-content">Instaragm</span>
            <span className="footer-content">Mexico</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
