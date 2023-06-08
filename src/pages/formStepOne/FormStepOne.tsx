import React, { FC } from "react";
import style from "./FormStepOne.module.css";
import ProgressLine from "../../components/progressLine/ProgressLine";

interface FormStepOneProps {}

const FormStepOne: FC<FormStepOneProps> = () => {
  return (
    <article className={style.main}>
        <ProgressLine step="two" />
      {/* форма */}
    </article>
  )
}

export default FormStepOne;