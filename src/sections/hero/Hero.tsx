import { useWindowSize } from "../../hooks/useWindowResize";
import HeroImgMobile from "../../images/hero-img-mobile.png";
import HeroImgDestop from "../../images/hero-section-desktop.svg";
import "./Hero.scss";

export const Hero = () => {
  const { width } = useWindowSize();
  return (
    <section id="hero" className="hero-container">
      <img
        src="https://i.ibb.co/wNY629Q/IMG-0123.jpg"
        alt="hero-img"
        className="hero-img"
      />
      <hr className="hero-line" />
      <div className="hero-content">
        <h1 className="hero-title">Terapias de sanacion energetica.</h1>
        <h3 className="hero-subtitle">
          La terapia energética es una técnica que consiste en eliminar la
          memoria celular a través de la energía humana promoviendo la salud, el
          balance y la relajación. Esta terapia se basa en la conexión entre el
          cuerpo y la mente, así como entre nuestras emociones y nuestro
          espíritu y la influencia que todo ello tiene en nuestras vidas.
        </h3>
      </div>
    </section>
  );
};
