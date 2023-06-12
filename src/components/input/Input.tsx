import React, { FC } from "react";
import style from "./Input.module.css";

interface InputProps {
  width?: string;
  title: string;
  type: string;
  placeholder?: string;
  tip?: string;
  id: string;
}

const Input: FC<InputProps> = ({width, title, type, placeholder, tip, id}) => {
  
  return (
    <div className={style.inputContainer}>
      <p className={style.inputTitle}>{title}</p>
      <input 
        style={{width: width ? width : "auto"}}
        className={style.input}
        type={type}
        placeholder={placeholder ? placeholder : 'Placeholder'}
        id={id}
      />
      {tip && <p className={style.inputTip}>{tip}</p>}
    </div>
  )
}

export default Input;