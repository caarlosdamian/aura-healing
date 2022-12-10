import "./Header.scss";
import Hambuerger from "../../images/icon-hamburger.svg";
import Logo from "../../images/aura.png";
import { useState } from "react";
import { Button } from "../../components/";

export const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <header className="header-container">
      <img src={Logo} alt="logo-img" className="header-logo" />
      <img
        src={Hambuerger}
        alt="hambuerger-menu"
        className="header-hambuerger-menu"
        onClick={() => setisOpen(!isOpen)}
      />

      <nav className="nav-container">
        <span className="navItem">Productos</span>
        <span className="navItem">Contacto</span>
        <Button label="Paquetes" onClick={() => console.log("hola")} />
      </nav>
      {isOpen && (
        <div className="menu-container">
          <a
            onClick={() => setisOpen(false)}
            href="#productos"
            className="menu-option"
          >
            PRODUCTOS
          </a>
          <a
            onClick={() => setisOpen(false)}
            href="#contact"
            className="menu-option"
          >
            CONTACTO
          </a>
          <button className="menu-button button">PAQUETES</button>
        </div>
      )}
    </header>
  );
};
