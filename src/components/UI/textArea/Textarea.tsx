import React, { FC, forwardRef } from "react";
import style from "./Textarea.module.css";

interface TextareaProps {
  width?: string;
  title: string;
  placeholder?: string;
  tip?: string;
  id: string;
  ref?: any;
  field?: any;
}

const Textarea: FC<TextareaProps> = forwardRef(({width, title, placeholder, tip, id, ...rest}, ref) => {
  
  return (
    <div className={style.textareaContainer}>
      <p className={style.textareaTitle}>{title}</p>
      <textarea
        style={{width: width ? width : "auto"}}
        className={style.textarea}
        placeholder={placeholder ? placeholder : 'Placeholder'}
        id={id}
        ref={ref}
        {...rest}
      />
      {tip && <p className={style.textareaTip}>{tip}</p>}
    </div>
  )
})

export default Textarea;