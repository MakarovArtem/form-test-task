import React, { FC } from "react";
import { ReactSVG } from "react-svg";
import style from "./ButtonIcon.module.css";

interface ButtonIconProps {
  onClick?: (key: any) => void;
  maxWidth?: string;
  picURL: string;
  id: string;
}

const ButtonIcon: FC<ButtonIconProps> = ({onClick, maxWidth, picURL, id}) => {

  return (
    <div className={style.ButtonIcon} onClick={onClick} id={id}></div>
  )
}

export default ButtonIcon;