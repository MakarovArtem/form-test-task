import React, { FC } from "react";
import style from "./Select.module.css";

interface SelectProps {
  width?: string;
  title: string;
  variants?: string[];
  tip?: string;
  id?: string;
}

const Select: FC<SelectProps> = ({width, title, variants, tip, id}) => {
  return (
    <div className={style.selectContainer}>
      <p className={style.selectTitle}>{title}</p>
      <select style={{width: width ? width : "400px"}} className={style.select} id={id}>
        <option value="notChosen">Не выбрано</option>
        {variants?.map((variant) => 
          <option className={style.option} value={variant}>{variant}</option>
        )}
      </select>
      {tip && <p className={style.selectTip}>{tip}</p>}
    </div>
  )
}

export default Select;