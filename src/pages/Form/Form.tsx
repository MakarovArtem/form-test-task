import React, { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {  useAppSelector } from "../../store/hooks/hooks";
import ProgressLine from "../../components/progressLine/ProgressLine";
import Button from "../../components/UI/button/Button";
import FormStepOne from "./FormStepOne/FormStepOne";
import FormStepTwo from "./FormStepTwo/FormStepTwo";
import FormStepThree from "./FormStepThree/FormStepThree";
import ModalWindow from "../../components/modalWindow/ModalWindow";
import sendData from "../../api/sendData";
import style from "./Form.module.css";

interface FormProps {}

const Form: FC<FormProps> = () => {

  const [step, setStep] = useState<number>(1);
  const [modalOn, setModalOn] = useState<boolean>(false);
  const [modalSuccessfull, setModalSuccessfull] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>("");
  const navigate = useNavigate();

  const state = useAppSelector(state => state);
  const stepOneValid = useAppSelector(state => state.valid.stepOneValid);
  const stepTwoValid = useAppSelector(state => state.valid.stepTwoValid);
  const stepThreeValid = useAppSelector(state => state.valid.stepThreeValid);

  function stepBack() {
    if (step !== 1) {
      setStep(prev => prev - 1);
    } else {
      navigate("/");
    }
  }

  function stepForward(){
    if((stepOneValid && step === 1) ||
      (stepTwoValid && step === 2) ||
      (stepThreeValid && step === 3))
    {
      console.log("forward + ", state)
      setStep(prev => prev + 1);
    } else {
      console.log("stepOneValid ? ", stepOneValid)
      console.log("stepTwoValid ? ", stepTwoValid)
      console.log("stepThreeValid ? ", stepThreeValid)
      // alert(`On step ${step} some fields are invalid`)
    }
  }

  function transformFormData(stateForm: any) {

    return {
      ...stateForm.main,
      ...stateForm.stepOne,
      ...stateForm.stepTwo,
      ...stateForm.stepThree,
      advantages: stateForm.stepTwo.advantages.map((obj: any) => obj.advantage),
      checkbox: stateForm.stepTwo.checkbox === false ? false :
        stateForm.stepTwo.checkbox.map((item: string) => parseInt(item)),
      radio: parseInt(stateForm.stepTwo.radio),
    };
  }

  useEffect(() => {
    if(step === 4) {
      const dataToSend = transformFormData(state);
      // sendData(dataToSend);
      console.log("data to send: ", dataToSend)
    }
  }, [step, state])

  return (
    <article className={style.main}>
      <div className={style.mainContainer}>
        <div className={style.progressLineContainer}>
          <ProgressLine step={step} />
        </div>
        <div className={style.formContainer}>
          <div>
            {
              step === 1 ?
              <FormStepOne /> : 
              step === 2 ? 
              <FormStepTwo /> :
              <FormStepThree />
            }
          </div>
        </div>
        <div className={style.backContainer}>
          <Button
            onClick={stepBack}
            text="Назад" 
            theme={"white"} 
            id="button-back"
          />
        </div>
        <div className={style.nextContainer}>
          <Button
            onClick={stepForward}
            text={step >= 3 ? "Отправить" : "Далее"}
            theme={"blue"}
            id={step >= 3 ? "button-send" : "button-next"}
          />
        </div>
      </div>
      {modalOn &&
      <ModalWindow
        isSuccessfull={modalSuccessfull}
        message={modalMessage}
        setModalOn={setModalOn}
      />}
    </article>
  )
}

export default Form;