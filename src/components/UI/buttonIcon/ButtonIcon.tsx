import React, { FC } from "react";
import style from "./ButtonIcon.module.css";

interface ButtonIconProps {
  onClick?: (a: any) => void;
  maxWidth?: string;
  picUrl: string;
  id: string;
}

const ButtonIcon: FC<ButtonIconProps> = ({onClick, maxWidth, picUrl, id}) => {

  return (
    <div style={{maxWidth: maxWidth}} className={style.buttonIcon} onClick={onClick} id={id}>
      <img className={style.icon} src={picUrl} alt="delete-icon" />
    </div>
  )
}

export default ButtonIcon;