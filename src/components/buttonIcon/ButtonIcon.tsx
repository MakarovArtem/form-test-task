import React, { FC } from "react";
import style from "./ButtonIcon.module.css";

interface ButtonIconProps {
  maxWidth?: string;
  picURL: string;
  alt: string;
  id: string;
}

const ButtonIcon: FC<ButtonIconProps> = ({maxWidth, picURL, alt, id}) => {

  return (
    <img 
      style={{maxWidth: maxWidth ? maxWidth : "20px"}}
      className={style.buttonIcon}
      src={picURL}
      alt={alt}
      id={id}
    />
  )
}

export default ButtonIcon;