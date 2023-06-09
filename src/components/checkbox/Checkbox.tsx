import React, { FC } from "react";
import style from "./Checkbox.module.css";

interface CheckboxProps {
  title: string;
  variants: string[];
  optionsId: string[];
  id: string;
}

const Checkbox: FC<CheckboxProps> = ({title, variants, optionsId, id}) => {
  return (
    <fieldset className={style.checkboxGroupContainer} id={id}>
      <legend className={style.checkboxTitle}>{title}</legend>
      {variants.map((variant, ind) =>
        <div className={style.checkboxContainer}>
          <input className={style.checkbox} type="checkbox" value={variant} id={optionsId?.[ind]} />
          <label className={style.checkboxLabel} htmlFor={variant}>{variant}</label>
        </div>
      )}
    </fieldset>
  )
}

export default Checkbox;