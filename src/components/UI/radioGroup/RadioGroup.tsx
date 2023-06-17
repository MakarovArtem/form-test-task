import React, { FC } from "react";
import style from "./RadioGroup.module.css";

interface Options {
  value: string;
  id: string;
}

interface RadioProps {
  register: any;
  title: string;
  groupName: string;
  options: Options[];
  id: string;
}

const RadioGroup: FC<RadioProps> = ({register, title, groupName, options, id}) => {

  return (
    <fieldset className={style.radioGroupContainer} id={id}>
      <legend className={style.radioGroupTitle}>{title}</legend>
      {options.map((option) =>
        <div className={style.radioContainer} key={option.id}>
          <input 
            className={style.radio}
            {...register(groupName)}
            type="radio"
            name={groupName}
            value={option.value}
            id={option.id}
          />
          <label
            className={style.radioLabel}
            htmlFor={option.id}
          >
            {option.value}
          </label>
        </div>
      )}
    </fieldset>
  )
}

export default RadioGroup;