import React, { FC, useState } from "react";
import ProgressLine from "../../components/progressLine/ProgressLine";
import FormStepOne from "./FormStepOne/FormStepOne";
import FormStepTwo from "./FormStepTwo/FormStepTwo";
import FormStepThree from "./FormStepThree/FormStepThree";
import Button from "../../components/UI/button/Button";
import style from "./Form.module.css";

interface FormProps {}

interface Form {
  formOne: boolean;
  formTwo:boolean;
  formThree: boolean;
}

const Form: FC<FormProps> = () => {

  const [step, setStep] = useState(1);
  const [form, setForm] = useState(
    {
      formOne: false,
      formTwo: false,
      formThree: false,
    }
  )

  function decreaseAllowed() {
    if (step !== 1) return true
    return false;
  }

  function increaseAllowed() {
    if (step === 1 && form.formOne) return true;
    if (step === 2 && form.formTwo) return true;
    if (step === 3 && form.formThree) return true;
    return false;
  }

  function decreaseStep(){
    if (decreaseAllowed()) {
      setStep(prev => prev - 1);
      console.log("decrease");
    }
    console.log("no decrease");
  }

  function increaseStep(){
    if(increaseAllowed()) { 
      setStep(prev => prev + 1);
      console.log("increase");
    }
    console.log("no increase");
  }

  function getFormState(object: any){
    setForm(prev => object);
  }

  return (
    <article className={style.main}>
      <div className={style.mainContainer}>
        <div className={style.progressLineContainer}>
          <ProgressLine step={step} />
        </div>
        <div className={style.formContainer}>
          {
            step === 1 ? <FormStepOne getFormState={getFormState} form={form} /> :
            step === 2 ? <FormStepTwo /> :
            step === 3 ? <FormStepThree /> : false
          }
        </div>
        <div className={style.backContainer}>
          <Button onClick={decreaseStep} text="Назад" theme={"white"} id="button-back" />
        </div>
        <div className={style.nextContainer}>
          <Button onClick={increaseStep} text="Далее" theme={"blue"} id="button-next" />
        </div>
      </div>
    </article>
  )
}

export default Form;