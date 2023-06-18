import React, { FC, forwardRef } from "react";
import style from "./Input.module.css";

interface InputControllerProps {
  width?: string;
  disabled?: boolean;
  title: string;
  type?: string;
  placeholder?: string;
  tip?: string;
  id: string;
  ref?: any;
}

const InputController: FC<InputControllerProps> = forwardRef(({width, title, placeholder, type, tip, id, ...rest}, ref) => {

  return (
    <div className={style.inputContainer}>
      <p className={style.inputTitle}>{title}</p>
      <input 
        style={{width: width ? width : "auto"}}
        className={style.input}
        type={type}
        placeholder={placeholder ? placeholder : 'Placeholder'}
        id={id}
        ref={ref}
        {...rest}
      />
      {tip && <p className={style.inputTip}>{tip || "Error!"}</p>}
    </div>
  )
})

export default InputController;