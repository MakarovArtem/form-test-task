import React, { FC } from "react";

import style from "./CheckboxGroup.module.css";

interface Options {
  value: string;
  id: string;
}

interface CheckboxGroupProps {
  register: any;
  title: string;
  groupName: string;
  options: Options[];
  id: string;
}

const CheckboxGroup: FC<CheckboxGroupProps> = ({register, title, groupName, options, id}) => {

  return (
    <fieldset className={style.checkboxGroupContainer} id={id}>
      <legend className={style.checkboxGroupTitle}>{title}</legend>
      {options.map((option) =>
        <div className={style.checkboxContainer} key={option.id}>
          <input
            className={style.checkbox}
            {...register(groupName)}
            type="checkbox"
            name={groupName}
            value={option.value}
            id={option.id}
          />
          <label
            className={style.checkboxLabel}
            htmlFor={option.id}
          >
            {option.value}
          </label>
        </div>
      )}
    </fieldset>
  )
}

export default CheckboxGroup;