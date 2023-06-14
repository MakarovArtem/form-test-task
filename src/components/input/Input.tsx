import React, { FC, useEffect } from "react";
import style from "./Input.module.css";

interface InputProps {
  width?: string;
  title: string;
  type: string;
  placeholder?: string;
  tip?: string;
  id: string;
  field?: any;
}

// field: {onChange, onBlur, value, name, ref}

const Input: FC<InputProps> = ({width, title, type, placeholder, tip, id, ...field}) => {
  
  return (
    <div className={style.inputContainer}>
      <p className={style.inputTitle}>{title}</p>
      <input 
        style={{width: width ? width : "auto"}}
        className={style.input}
        type={type}
        placeholder={placeholder ? placeholder : 'Placeholder'}
        id={id}
        {...field}
        ref={null}
        // onChange={onChange}
        // onBlur={onBlur}
        // value={value}
        // name={name}
      />
      {tip && <p className={style.inputTip}>{tip || "Error!"}</p>}
    </div>
  )
}

export default Input;