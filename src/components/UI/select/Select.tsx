import React, { FC, forwardRef } from "react";
import style from "./Select.module.css";

interface Options {
  value: string;
  id: string;
}

interface SelectProps {
  width?: string;
  disabled?: boolean;
  title: string;
  options: Options[];
  tip?: string;
  id: string;
  field?: any;
  ref?: any;
}

const Select: FC<SelectProps> = forwardRef(({width, title, options, tip, id, ...rest}, ref) => {
  return (
    <div className={style.selectContainer}>
      <p className={style.selectTitle}>{title}</p>
      <select
        style={{width: width ? width : "auto"}}
        className={style.select}
        id={id}
        ref={ref}
        {...rest}
      >
        {options?.map((option) => 
          <option
            className={style.option}
            value={option.value}
            id={option.id}
          >
            {option.value}
          </option>
        )}
      </select>
      {tip && <p className={style.selectTip}>{tip}</p>}
    </div>
  )
})

export default Select;