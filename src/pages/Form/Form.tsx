import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { updateFormData } from "store/reducers/formSlice";

import ProgressLine from "components/progressLine/ProgressLine";
import FormStepOne from "pages/Form/FormStepOne/FormStepOne";
import FormStepTwo from "pages/Form/FormStepTwo/FormStepTwo";
import FormStepThree from "pages/Form/FormStepThree/FormStepThree";
import ModalWindow from "components/modalWindow/ModalWindow";

import style from "./Form.module.css";

import sendData from "api/sendData";

const Form = () => {

  const [step, setStep] = useState<number>(1);
  const [modalOn, setModalOn] = useState<boolean>(false);
  const [modalStatus, setModalStatus] = useState<string>("");
  const [modalMessage, setModalMessage] = useState<string>("");
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const state = useAppSelector(state => state);

  function stepBack(data: any) {
    dispatch(updateFormData(data));
    step === 1 ? navigate("/") : setStep(prev => prev - 1);
  }

  function stepForward(data: any) {
    dispatch(updateFormData(data));
    step !== 3 ? setStep(prev => prev + 1) : getResponse(state);
  }

  function getResponse(formData: any) {
    const dataToSend = transformFormData(formData);
    console.log(dataToSend);
    sendData(dataToSend)
      .then(data => {
        setModalOn(true);
        setModalMessage(data.message);
        setModalStatus(data.status);
    })
  }

  function transformFormData(data: any) {

    return {
      ...data.form,
      advantages: data.form.advantages.map((obj: any) => obj.advantage),
      checkbox: data.form.checkbox === false ? false :
        data.form.checkbox.map((item: string) => parseInt(item)),
      radio: parseInt(data.form.radio),
    }
  }

  return (
    <article className={style.main}>
      <div className={style.mainContainer}>
        <div className={style.progressLineContainer}>
          <ProgressLine 
            currentStep={step}
            steps={["1","2","3"]}
          />
        </div>
        <div className={style.formContainer}>
          {step === 1 && <FormStepOne stepForward={stepForward} stepBack={stepBack} />}
          {step === 2 && <FormStepTwo stepForward={stepForward} stepBack={stepBack} />}
          {step === 3 && <FormStepThree stepForward={stepForward} stepBack={stepBack} />}
        </div>
      </div>
      {modalOn &&
        <ModalWindow
          status={modalStatus}
          message={modalMessage}
          setModalOn={setModalOn}
      />}
    </article>
  )
}

export default Form;