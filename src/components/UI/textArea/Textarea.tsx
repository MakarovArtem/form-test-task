import React, { FC, useState, forwardRef } from "react";
import style from "./Textarea.module.css";
import { useAppSelector } from "../../../store/hooks/hooks";

interface TextareaProps {
  width?: string;
  title: string;
  placeholder?: string;
  tip?: string;
  id: string;
  ref?: any;
  watch: any;
}

const Textarea: FC<TextareaProps> = forwardRef(({width, title, placeholder, tip, id, watch, ...rest}, ref) => {
  
  const textareaValue = watch("about");
  const count = textareaValue?.length;

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
      {count && <p className={style.textareaCount}>{count}</p>}
    </div>
  )
})

export default Textarea;