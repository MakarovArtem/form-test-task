import React, { FC } from "react";
import style from "./Checkbox.module.css";

interface Options {
  value: string;
  id: string;
}

interface CheckboxProps {
  title: string;
  groupName: string;
  options: Options[];
  id: string;
}

const Checkbox: FC<CheckboxProps> = ({title, groupName, options, id}) => {
  
  return (
    <fieldset className={style.checkboxGroupContainer} id={id}>
      <legend className={style.checkboxTitle}>{title}</legend>
      {options.map((option) =>
        <div className={style.checkboxContainer} key={option.id}>
          <input
            className={style.checkbox}
            type="checkbox"
            value={option.value}
            name={groupName}
            id={option.id}
          />
          <label className={style.checkboxLabel} htmlFor={option.value}>{option.value}</label>
        </div>
      )}
    </fieldset>
  )
}

export default Checkbox;