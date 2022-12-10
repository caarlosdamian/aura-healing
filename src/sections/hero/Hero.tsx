import React, { useEffect } from "react";
import { useWindowSize } from "../../hooks/useWindowResize";
// import HeroImg from '../../images/'
import "./Hero.scss";

export const Hero = () => {
  const {width} = useWindowSize()
  console.log(width)
  return (
    <section id="hero">
      <img src="" alt="" />
    </section>
  );
};
