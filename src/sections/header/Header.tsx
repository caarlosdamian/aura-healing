import Hambuerger from "../../images/icon-hamburger.svg";
import Logo from "../../images/aura.png";
import { useState } from "react";
import { Button } from "../../components/";
import EyeIcon from "../../images/eye-img.png";
import "./Header.scss";

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
        <a href="#productos" className="navItem">
          Productos
        </a>
        <a href="#contacto" className="navItem">
          Contacto
        </a>
        <Button
          href="#paquetes"
          label="Paquetes"
          onClick={() => setisOpen(false)}
        />
      </nav>
      {isOpen && (
        <div className="menu-container">
          <img src={EyeIcon} alt="EyeIcon" className="hero-img-bottom" />

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
          <Button
            href="#paquetes"
            label="PAQUETES"
            onClick={() => setisOpen(false)}
          />
        </div>
      )}
    </header>
  );
};
