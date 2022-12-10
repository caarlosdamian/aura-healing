import React from "react";
import "./Button.scss";

interface IButn {
  label: string;
  onClick: any;
  href: string;
}

export const Button = ({ label, onClick, href }: IButn) => {
  return (
    <a href={href} className="button" onClick={onClick}>
      {label}
    </a>
  );
};
