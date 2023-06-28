import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "redux/hooks/hooks";
import { updateFormData } from "redux/reducers/formSlice";
import Stepper from "components/Stepper/Stepper";
import StepOne from "components/StepOne/StepOne";
import StepTwo from "components/StepTwo/StepTwo";
import StepThree from "components/StepThree/StepThree";
import ModalWindow from "components/ModalWindow/ModalWindow";
import style from "./Create.module.css";
import sendData from "api/sendData";

const Create = () => {

  const [step, setStep] = useState<number>(1);
  const [modalOn, setModalOn] = useState<boolean>(false);
  const [modalStatus, setModalStatus] = useState<string>("");
  const [modalMessage, setModalMessage] = useState<string>("");
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const state = useAppSelector(state => state);

  function transformData(data: any) {

    return {
      ...data.form,
      advantages: data.form.advantages.map((obj: any) => obj.advantage),
      checkbox: data.form.checkbox === false ? false :
        data.form.checkbox.map((item: string) => parseInt(item)),
      radio: parseInt(data.form.radio),
    }
  }

  function getResponse(formData: {}) {
    const dataToSend = transformData(formData);
    console.log(dataToSend);
    sendData(dataToSend)
      .then(data => {
        setModalOn(true);
        setModalMessage(data.message);
        setModalStatus(data.status);
    })
  }

  function onBack(data: {}) {
    dispatch(updateFormData(data));
    step === 1 ? navigate("/") : setStep(prev => prev - 1);
  }

  function onForward(data: {}) {
    dispatch(updateFormData(data));
    step !== 3 ? setStep(prev => prev + 1) : getResponse(state);
  }

  return (
    <article className={style.main}>
      <div className={style.mainContainer}>
        <div className={style.stepperContainer}>
          <Stepper 
            currentStep={step}
            steps={["1","2","3"]}
          />
        </div>
        <div className={style.formContainer}>
          {step === 1 && <StepOne forward={onForward} back={onBack} />}
          {step === 2 && <StepTwo forward={onForward} back={onBack} />}
          {step === 3 && <StepThree forward={onForward} back={onBack} />}
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

export default Create;