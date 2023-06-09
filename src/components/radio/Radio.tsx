import React, { FC } from "react";
import style from "./Radio.module.css";

interface RadioProps {
  title: string;
  groupName: string;
  variants: string[];
  optionsId: string[];
  id: string;
}

const Radio: FC<RadioProps> = ({title, groupName, variants, optionsId, id}) => {
  return (
    <fieldset className={style.radioGroupContainer} id={id}>
      <legend className={style.radioTitle}>{title}</legend>
      {variants.map((variant, ind) =>
        <div className={style.radioContainer}>
          <input className={style.radio} type="radio" value={variant} name={groupName} id={optionsId?.[ind]} />
          <label className={style.radioLabel} htmlFor={variant}>{variant}</label>
        </div>
      )}
    </fieldset>
  )
}

export default Radio;