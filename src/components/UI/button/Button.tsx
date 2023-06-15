import React, { FC } from "react";
import styleBlue from "./ButtonBlue.module.css";
import styleWhite from "./ButtonWhite.module.css";

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
  // props: any;
  disabled?: boolean;
  text: string;
  id: string;
  theme?: string;
}

const Button: FC<ButtonProps> = ({onClick, disabled, text, id, theme}) => {

  const style = theme === "blue" ? styleBlue :
    theme === "white" ? styleWhite : styleWhite;

  return (
    <button onClick={onClick} disabled={disabled} className={style.button} id={id}>{text}</button>
  )
}

export default Button;