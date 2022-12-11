import React from "react";
import "./Card.scss";

export const Card = () => {
  return (
    <div className="card-container">
      <h3 className="card-title">Paquete 1</h3>
      <h1 className="card-price"><strong>$</strong>19.99</h1>
      <div className="card-details-container">
        <span className="card-details-item">5 Masajes</span>
        <span className="card-details-item">3 Sessiones</span>
        <span className="card-details-item">1 Vela</span>
      </div>
      <button className="card-button">Elegir</button>
    </div>
  );
};
