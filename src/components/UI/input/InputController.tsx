import React, { FC, Ref, forwardRef } from "react";
import style from "./Input.module.css";

interface InputControllerProps {
  width?: string;
  disabled?: boolean;
  title: string;
  type?: string;
  placeholder?: string;
  tip?: string;
  id: string;
  ref?: Ref<HTMLInputElement>;
}

const InputController: FC<InputControllerProps> = forwardRef(({width, disabled, title, placeholder, type, tip, id, ...rest}, ref) => {

  return (
    <div className={style.inputContainer}>
      <p className={style.inputTitle}>{title}</p>
      <input
        disabled={disabled}
        style={{
          width: width ? width : "auto",
          background: disabled ? "rgba(0, 0, 0, 0.04)" : "white", 
        }}
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