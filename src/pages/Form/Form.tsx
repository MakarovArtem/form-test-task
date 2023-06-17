import React, { FC, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import ProgressLine from "../../components/progressLine/ProgressLine";
import FormStepOne from "./FormStepOne/FormStepOne";
import FormStepTwo from "./FormStepTwo/FormStepTwo";
import FormStepThree from "./FormStepThree/FormStepThree";
import Button from "../../components/UI/button/Button";
import style from "./Form.module.css";

interface FormProps {}

interface Form {

}

const Form: FC<FormProps> = () => {

  const [step, setStep] = useState(2);

  const {
    watch,
    control,
    register,
    handleSubmit,
    formState: {isValid}
  } = useForm({ mode: "onBlur" });
  
  function decreaseStep(){
    if (step !== 1) {
      setStep(prev => prev - 1);
      console.log("decrease");
    }
    console.log("no decrease");
  }

  const onSubmit = (data:any) => {
    // тут записываю в стор
    setStep(prev => prev + 1);// тут увеличиваю страничку
    console.log(JSON.stringify(data))
  }

  const { fields, append, remove } = useFieldArray({
    control,
    name: "advantages"
  });

  return (
    <article className={style.main}>
      <div className={style.mainContainer}>
        <div className={style.progressLineContainer}>
          <ProgressLine step={step} />
        </div>
        <div className={style.formContainer}>
          <form onSubmit={handleSubmit(onSubmit)} >
            {
              step === 1 ? <FormStepOne control={control} /> :
              step === 2 ? <FormStepTwo 
                              register={register}
                              append={append}
                              remove={remove}
                              fields={fields}
                            /> :
              step === 3 ? <FormStepThree control={control} /> : false
            }
            <input type="submit" />
          </form>
        </div>
        <div className={style.backContainer}>
          <Button onClick={decreaseStep} text="Назад" theme={"white"} id="button-back" />
        </div>
        <div className={style.nextContainer}>
          <Button onClick={handleSubmit(onSubmit)} text="Далее" theme={"blue"} id="button-next" />
        </div>
      </div>
      <p onClick={()=> console.log(watch())}>Данные</p>
    </article>
  )
}

export default Form;