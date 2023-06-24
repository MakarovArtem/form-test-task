import React, { FC } from "react";

import style from "./Input.module.css";

interface InputProps {
  width?: string;
  disabled?: boolean;
  title: string;
  placeholder?: string;
  type?: string;
  tip?: string;
  id: string;
  ref?: any;
  register?: any;
  registerProps?: string;
}

const Input: FC<InputProps> = ({width, disabled, title, placeholder, type, tip, id, register, registerProps}) => {

  return (
    <div className={style.inputContainer}>
      <p className={style.inputTitle}>{title}</p>
      <input
        disabled={disabled}
        style={{width: width ? width : "auto"}}
        className={style.input}
        type={type}
        placeholder={placeholder ? placeholder : 'Placeholder'}
        id={id}
        {...register(registerProps)}
      />
      {tip && <p className={style.inputTip}>{tip || "Error!"}</p>}
    </div>
  )
}

export default Input;