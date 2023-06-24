import React, { FC, forwardRef } from "react";

import style from "./Textarea.module.css";

interface TextareaProps {
  width?: string;
  disabled?: boolean;
  title: string;
  placeholder?: string;
  tip?: string;
  id: string;
  watch: any;
  ref?: any;
}

const Textarea: FC<TextareaProps> = forwardRef(({width, disabled, title, placeholder, tip, id, watch, ...rest}, ref) => {
  
  const textareaValue = watch("about");
  const count = textareaValue?.length;

  return (
    <div className={style.textareaContainer}>
      <p className={style.textareaTitle}>{title}</p>
      <textarea
        disabled={disabled}
        style={{width: width ? width : "auto"}}
        className={style.textarea}
        placeholder={placeholder ? placeholder : 'Placeholder'}
        id={id}
        ref={ref}
        {...rest}
      />
      {tip && <p className={style.textareaTip}>{tip}</p>}
      {count > 0 && <p className={style.textareaCount}>{count}</p>}
    </div>
  )
})

export default Textarea;