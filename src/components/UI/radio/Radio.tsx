import React, { FC } from "react";
import style from "./Radio.module.css";

interface RadioProps {
  title: string;
  groupName: string;
  options: string[];
  optionsId: string[];
  id: string;
}

const Radio: FC<RadioProps> = ({title, groupName, options, optionsId, id}) => {
  
  return (
    <fieldset className={style.radioGroupContainer} id={id}>
      <legend className={style.radioTitle}>{title}</legend>
      {options.map((option, ind) =>
        <div className={style.radioContainer}>
          <input 
            className={style.radio}
            type="radio"
            value={option}
            name={groupName}
            id={optionsId?.[ind]}
          />
          <label className={style.radioLabel} htmlFor={option}>{option}</label>
        </div>
      )}
    </fieldset>
  )
}

export default Radio;