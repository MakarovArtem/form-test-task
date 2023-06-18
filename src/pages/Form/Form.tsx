import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

import sendData from "../../api/sendData";

import style from "./Form.module.css";

interface FormProps {}

const Form: FC<FormProps> = () => {

  const [step, setStep] = useState(1);
  const [modalOn, setModalOn] = useState(false);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const advantages = useAppSelector(state => state.stepTwo.advantages);
  const checkbox = useAppSelector(state => state.stepTwo.checkboxGroup);
  const radio = useAppSelector(state => state.stepTwo.radioGroup);
  const state = useAppSelector(state => state);

  const {
    watch,
    control,
    register,
    handleSubmit,
  } = useForm({  defaultValues: {
    advantages: [...advantages],
    checkboxGroup: checkbox,
    radioGroup: radio,
  }});

  const { fields, append, remove } = useFieldArray({
    control,
    name: "advantages",
  });
  
  function back(){
    if (step !== 1) {
      setStep(prev => prev - 1);
     } else {
      navigate("/");
    } 
  }

  function forward() {
    if (step !== 4) {
      setStep(prev => prev + 1);
    }
  }

  function transformAdvantages() {
    //@ts-ignore
    const advantagesStringArr = advantages.map((obj) => obj.advantage);
    //@ts-ignore
    dispatch(setAdvantages(advantagesStringArr))
  }

  function transformCheckbox() {
    if (checkbox !== false) {
      //@ts-ignore
      const checkboxGroupNumberArray = checkbox.map((item: string) => parseInt(item));
      //@ts-ignore
      dispatch(setCheckboxGroup(checkboxGroupNumberArray))
    } else {
      dispatch(setCheckboxGroup(false))
    }
  }

  function transformRadio() {
    const radioGroupNumber = parseInt(radio);
    //@ts-ignore
    dispatch(setRadioGroup(radioGroupNumber))
  }

  const onSubmit = (data: any) => {
    // console.log(data.advantages)
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
        break;
    }
  }

  useEffect(()=>{
    if (step === 4) {
      // transformAdvantages();
      transformCheckbox();
      transformRadio();

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state)
      };

      const url = "https://api.sbercloud.ru/content/v1/bootcamp/frontend";

      fetch(url, requestOptions)
          .then(response => response.json())
          .then(data => data.status === "success" ? setModalOn(true) : setModalOn(false));

      // const url = "https://api.sbercloud.ru/content/v1/bootcamp/frontend";
      // const isRequestSuccessful = sendData(url, state);
      // //@ts-ignore
      // // setModalOn(isRequestSuccessful);
      // console.log("staaaaaaaaaaaaaaaaaaaaaaaate",state)
      // console.log("advaaaaaaaaaaaaantage",advantages)
      // console.log(isRequestSuccessful, "response")
    }
  },[step,advantages, checkbox, radio])

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
                            /> 
              : <FormStepThree control={control} watch={watch} />
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