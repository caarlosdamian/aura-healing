import React from "react";
import Pattern from '../../images/pattern.png'
import "./Contact.scss";

export const Contact = () => {
  return (
    <section id='contact' className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-img"></div>
        <img src={Pattern} alt="Pattern" className="contact-img" />
        <div className="contact-title">Contactanos para mas informacion.</div>
        <button className="contact-button button">Contactanos</button>
      </div>
    </section>
  );
};
