import React, { FC } from "react";
import style from "./Textarea.module.css";

interface TextareaProps {
  width?: string;
  title: string;
  placeholder?: string;
  tip?: string;
  id: string;
}

const Textarea: FC<TextareaProps> = ({width, title, placeholder, tip, id}) => {
  return (
    <div className={style.textareaContainer}>
      <p className={style.textareaTitle}>{title}</p>
      <textarea style={{width: width ? width : "400px"}} className={style.textarea} placeholder={placeholder ? placeholder : 'Placeholder'} id={id}/>
      {tip && <p className={style.textareaTip}>{tip}</p>}
    </div>
  )
}

export default Textarea;