import React from "react";
import './GridItem.scss'
interface GridItemI {
  title: string;
  description: string;
  img: string;
}

export const GridItem = ({ title, description, img }: GridItemI) => {
  return (
    <div className="feature-content">
      <div className="img-feat-container">
        <img src={img} alt={title} className="feature-img" />
      </div>
      <span className="feature-title">{title}</span>
      <article className="feature-description">{description}</article>
    </div>
  );
};
