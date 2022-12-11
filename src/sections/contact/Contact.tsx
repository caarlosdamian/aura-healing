import React from "react";
import Pattern from '../../images/pattern.png'
import "./Contact.scss";

export const Contact = () => {
  return (
    <section id='contact' className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-img"></div>
        <img src={Pattern} alt="Pattern" className="contact-img" />
        <div className="contact-title">Find out more about how we contact</div>
        <button className="contact-button button">Contact</button>
      </div>
    </section>
  );
};
