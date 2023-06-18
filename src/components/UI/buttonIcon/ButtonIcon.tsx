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
    <button type="button" onClick={onClick} id={id}>
      <ReactSVG
        style={{maxWidth: maxWidth ? maxWidth : "auto"}}
        className={style.buttonIcon}
        src={picURL}
      />
    </button>
  )
}

export default ButtonIcon;