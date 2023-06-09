import React, { FC } from "react";
import style from "./Input.module.css";

interface InputProps {
  widthInp?: string;
  title: string;
  type: string;
  placeholder?: string;
  tip?: string;
  id?: string;
}

const Input: FC<InputProps> = ({widthInp, title, type, placeholder, tip}) => {
  return (
    <div className={style.inputContainer}>
      <p className={style.inputTitle}>{title}</p>
      <input style={{width: widthInp ? widthInp : "400px"}} className={style.input} type={type} placeholder={placeholder ? placeholder : 'Placeholder'}/>
      {tip && <p className={style.inputTip}>{tip}</p>}
    </div>
  )
}

export default Input;