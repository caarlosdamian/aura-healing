import { useWindowSize } from "../../hooks/useWindowResize";
import HeroImgMobile from "../../images/hero-img-mobile.png";
import HeroImgDestop from "../../images/hero-section-desktop.svg";
import "./Hero.scss";

export const Hero = () => {
  const { width } = useWindowSize();
  console.log(width);
  return (
    <section id="hero" className="hero-container">
      <img
        src={width > 600 ? HeroImgDestop : HeroImgMobile}
        alt="hero-img"
        className="hero-img"
      />
      <hr  className="hero-line"/>
      <div className="hero-content">
        <h1 className="hero-title">Lorem ipsum, dolor sit amet.</h1>
        <h3 className="hero-subtitle">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
          numquam libero dolorum molestias! Sapiente sed temporibus rem eius
          beatae. Quaerat, culpa ut? Atque quas unde, voluptatibus fuga eaque
          obcaecati inventore?
        </h3>
      </div>
    </section>
  );
};
