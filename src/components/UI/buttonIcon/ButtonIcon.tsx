import React, { FC } from "react";
import { ReactSVG } from "react-svg";
import style from "./ButtonIcon.module.css";

interface ButtonIconProps {
  maxWidth?: string;
  picURL: string;
  id: string;
}

const ButtonIcon: FC<ButtonIconProps> = ({maxWidth, picURL, id}) => {

  return (
    <ReactSVG
      style={{maxWidth: maxWidth ? maxWidth : "auto"}}
      className={style.buttonIcon}
      src={picURL}
      id={id}
    />
  )
}

export default ButtonIcon;