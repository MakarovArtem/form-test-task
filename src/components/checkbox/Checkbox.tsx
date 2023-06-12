import React, { FC } from "react";
import style from "./Checkbox.module.css";

interface CheckboxProps {
  title: string;
  groupName: string;
  options: string[];
  optionsId: string[];
  id: string;
}

const Checkbox: FC<CheckboxProps> = ({title, groupName, options, optionsId, id}) => {
  
  return (
    <fieldset className={style.checkboxGroupContainer} id={id}>
      <legend className={style.checkboxTitle}>{title}</legend>
      {options.map((option, ind) =>
        <div className={style.checkboxContainer}>
          <label className={style.checkboxLabel} htmlFor={option}>{option}
            <input
              className={style.checkbox}
              type="checkbox"
              value={option}
              name={groupName}
              id={optionsId?.[ind]}
            />
            </label>
        </div>
      )}
    </fieldset>
  )
}

export default Checkbox;