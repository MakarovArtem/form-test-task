import React, { FC, useState } from "react";

import { useForm, useFieldArray } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { setName, setNickname, setSex, setSurname } from "../../store/reducers/stepOneSlice";
import { setAdvantages, setCheckboxGroup, setRadioGroup } from "../../store/reducers/stepTwoSlice";
import { setAbout } from "../../store/reducers/stepThreeSlice";

import ProgressLine from "../../components/progressLine/ProgressLine";
import FormStepOne from "./FormStepOne/FormStepOne";
import FormStepTwo from "./FormStepTwo/FormStepTwo";
import FormStepThree from "./FormStepThree/FormStepThree";
import Button from "../../components/UI/button/Button";
import ModalWindow from "../../components/modalWindow/ModalWindow";

import style from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import sendData from "../../api/sendData";

interface FormProps {}

const Form: FC<FormProps> = () => {

  const [step, setStep] = useState(1);
  const [modalOn, setModalOn] = useState(true);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const advantagesDef = useAppSelector(state => state.stepTwo.advantages);
  const checkboxDef = useAppSelector(state => state.stepTwo.checkboxGroup);
  const radioDef = useAppSelector(state => state.stepTwo.radioGroup);

  const {
    watch,
    control,
    register,
    handleSubmit,
  } = useForm({  defaultValues: {
    advantages: [...advantagesDef],
    checkboxGroup: checkboxDef,
    radioGroup: radioDef,
  }});
  
  function back(){
    if (step !== 1) {
      setStep(prev => prev - 1);
     } else {
      navigate("/");
    } 
  }

  function forward() {
    if (step !== 3) {
      setStep(prev => prev + 1);
    } else {
      // const status = sendData(url,data)
    }
  }

  const onSubmit = (data: any) => {
    alert("submit")
    switch(step){
      case 1:
        dispatch(setNickname(data.nickname));
        dispatch(setName(data.name));
        dispatch(setSurname(data.surname));
        dispatch(setSex(data.sex));
        break;
      case 2:
        dispatch(setAdvantages(data.advantages));
        dispatch(setRadioGroup(data.radioGroup));
        dispatch(setCheckboxGroup(data.checkboxGroup));
        break;
      case 3:
        dispatch(setAbout(data.about));
        // сделать запрос и вызвать модалку
        return;
    }
  }

  const { fields, append, remove } = useFieldArray({
    control,
    name: "advantages",
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
              step === 3 ? <FormStepThree control={control} watch={watch} /> : false
            }
          </form>
        </div>
        <div onClick={back} className={style.backContainer}>
          <Button onClick={handleSubmit(onSubmit)} text="Назад" theme={"white"} id="button-back" />
        </div>
        <div onClick={forward} className={style.nextContainer}>
          <Button onClick={handleSubmit(onSubmit)} text="Далее" theme={"blue"} id="button-next" />
        </div>
      </div>
      {modalOn && 
        // <div className={style.modalWindow}>
          <ModalWindow isSuccessfull={false} setModalOn={setModalOn} />
        // </div>
      }
    </article>
  )
}

export default Form;