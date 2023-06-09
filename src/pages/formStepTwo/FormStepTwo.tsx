import React, { FC } from "react";
import style from "./FormStepTwo.module.css";
import ProgressLine from "../../components/progressLine/ProgressLine";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Select from "../../components/select/Select";

interface FormStepTwoProps {}

const FormStepTwo: FC<FormStepTwoProps> = () => {
  return (
    <article className={style.main}>
      <div className={style.mainContainer}>
        <ProgressLine step="three" />
        <form className={style.form} action="post">

          <div className={style.backContainer}>
            <Button text="Назад" themeBlue={false} id="button-back" />
          </div>
          <div className={style.nextContainer}>
            <Button text="Далее" themeBlue={true} id="button-next" />
          </div>
        </form>
      </div>
    </article>
  )
}

export default FormStepTwo;