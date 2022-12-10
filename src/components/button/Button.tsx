import React from "react";
import "./Button.scss";

interface IButn {
  label: string;
  onClick: any;
}

export const Button = ({ label, onClick }: IButn) => {
  return <button className="button" >{label}</button>;
};
