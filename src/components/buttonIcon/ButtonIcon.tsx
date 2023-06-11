import React, { FC } from "react";
import style from "./ButtonIcon.module.css";

interface ButtonIconProps {
  picURL: string;
  alt: string;
  id: string;
  maxWidth?: string;
}

const ButtonIcon: FC<ButtonIconProps> = ({picURL, alt, id, maxWidth}) => {

  return (
    <img style={{maxWidth: maxWidth ? maxWidth : "20px"}} className={style.buttonIcon} src={picURL} alt={alt} id={id} />
  )
}

export default ButtonIcon;