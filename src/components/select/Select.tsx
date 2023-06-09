import React, { FC } from "react";
import style from "./Select.module.css";

interface SelectProps {
  width?: string;
  title: string;
  variants?: string[];
  optionsId?: string[];
  tip?: string;
  id?: string;
}

const Select: FC<SelectProps> = ({width, title, variants, tip, optionsId, id}) => {
  return (
    <div className={style.selectContainer}>
      <p className={style.selectTitle}>{title}</p>
      <select style={{width: width ? width : "400px"}} className={style.select} id={id}>
        <option value="notChosen">Не выбрано</option>
        {variants?.map((variant, ind) => 
          <option className={style.option} value={variant} id={optionsId?.[ind]}>{variant} </option>
        )}
      </select>
      {tip && <p className={style.selectTip}>{tip}</p>}
    </div>
  )
}

export default Select;