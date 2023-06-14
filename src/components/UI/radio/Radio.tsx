import React, { FC } from "react";
import style from "./Radio.module.css";

interface Options {
  value: string;
  id: string;
}

interface RadioProps {
  title: string;
  groupName: string;
  options: Options[];
  id: string;
}

const Radio: FC<RadioProps> = ({title, groupName, options, id}) => {
  
  return (
    <fieldset className={style.radioGroupContainer} id={id}>
      <legend className={style.radioTitle}>{title}</legend>
      {options.map((option) =>
        <div className={style.radioContainer} key={option.id}>
          <input 
            className={style.radio}
            type="radio"
            value={option.value}
            name={groupName}
            id={option.id}
          />
          <label className={style.radioLabel} htmlFor={option.value}>{option.value}</label>
        </div>
      )}
    </fieldset>
  )
}

export default Radio;