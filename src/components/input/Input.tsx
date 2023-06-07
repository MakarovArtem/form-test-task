import React, { FC } from "react";
import style from "./Input.module.css";

interface InputProps {
  title: string;
  type: string;
  placeholder?: string;
  id?: string;
}

const Input: FC<InputProps> = ({title, type, placeholder}) => {
  return (
    <div className={style.inputContainer}>
      <p className={style.inputTitle}>{title}</p>
      <input className={style.input} type={type} placeholder={placeholder ? placeholder : 'Placeholder'}/>
    </div>
  )
}

export default Input;