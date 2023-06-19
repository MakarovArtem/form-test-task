import React, { FC } from "react";
import style from "./ButtonIcon.module.css";

interface ButtonIconProps {
  onClick?: (key: any) => void;
  maxWidth?: string;
  picURL: string;
  id: string;
}

const ButtonIcon: FC<ButtonIconProps> = ({onClick, maxWidth, picURL, id}) => {

  return (
    <div className={style.buttonIcon} onClick={onClick} id={id}>
      <img className={style.icon} src={picURL} alt="delete-icon" />
    </div>
  )
}

export default ButtonIcon;