import React, { FC } from "react";
import styleBlue from "./ButtonBlue.module.css";
import styleWhite from "./ButtonWhite.module.css";

interface ButtonProps {
  text: string;
  id: string;
  theme?: string;
}

const Button: FC<ButtonProps> = ({text, id, theme}) => {

    const style = theme === "blue" ? styleBlue :
    theme === "white" ? styleWhite : styleWhite;

  return (
    <button className={style.button} id={id}>{text}</button>
  )
}

export default Button;