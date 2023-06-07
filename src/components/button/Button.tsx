import React, { FC } from "react";
import style from "./Button.module.css";

interface ButtonProps {
  text: string;
  id?: string;
  themeBlue?: boolean;
}

const Button: FC<ButtonProps> = ({text, id, themeBlue}) => {

  const mixedStyle = themeBlue ?
    `${style.button + ' ' + style.buttonBlue}`
    : `${style.button}`;

  return (
    <button className={mixedStyle} id={id}>{text}</button>
  )
}

export default Button;