import React, { FC, useState } from "react";
import ProgressLine from "../../components/progressLine/ProgressLine";
import FormStepOne from "./FormStepOne/FormStepOne";
import FormStepTwo from "./FormStepTwo/FormStepTwo";
import FormStepThree from "./FormStepThree/FormStepThree";
import Button from "../../components/UI/button/Button";
import style from "./Form.module.css";


interface FormProps {}

const Form: FC<FormProps> = () => {

  const [step, setStep] = useState(3);

  return (
    <article className={style.main}>
      <div className={style.mainContainer}>
        <div className={style.progressLineContainer}>
          <ProgressLine step={step} />
        </div>
        <form className={style.form}>
          {
            step === 1 ? <FormStepOne /> :
            step === 2 ? <FormStepTwo /> :
            <FormStepThree />
          }
        </form>
        <div className={style.backContainer}>
          <Button text="Назад" theme={"white"} id="button-back" />
        </div>
        <div className={style.nextContainer}>
          <Button text="Далее" theme={"blue"} id="button-next" />
        </div>
      </div>
    </article>
  )
}


export default Form;