import React, { FC } from "react";
import style from "./ButtonIcon.module.css";

interface ButtonIconProps {
  picURL: string;
  alt: string;
  id?: string;
}

const ButtonIcon: FC<ButtonIconProps> = ({picURL, alt, id}) => {

  return (
    <img className={style.buttonIcon} src={picURL} alt={alt} id={id} />
  )
}

export default ButtonIcon;