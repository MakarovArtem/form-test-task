import React, { FC } from "react";

import styleBlue from "./ButtonBlue.module.css";
import styleWhite from "./ButtonWhite.module.css";

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  text: string;
  id: string;
  theme?: string;
}

const Button: FC<ButtonProps> = ({onClick, disabled, type, text, id, theme}) => {

  const style = theme === "blue" ? styleBlue :
    theme === "white" ? styleWhite : styleWhite;

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={style.button} id={id}>{text}</button>
  )
}

export default Button;