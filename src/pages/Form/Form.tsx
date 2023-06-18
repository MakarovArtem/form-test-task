import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, useFieldArray } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { setName, setNickname, setSex, setSurname } from "../../store/reducers/stepOneSlice";
import { setAdvantages, setCheckboxGroup, setRadioGroup } from "../../store/reducers/stepTwoSlice";
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
  const [modalSuccessfull, setModalSuccessfull] = useState<boolean>(false)
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
    formState: {isValid}
  } = useForm({ mode: "onBlur", defaultValues: {
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
    } else if (step > 3){
      setStep(prev => prev - 2);
    } else {
      navigate("/");
    } 
  }

  function forward() {
    if (step !== 4) {
      setStep(prev => prev + 1);
    }
  }

  function getFormData(stateForm: any, lastStepData: any) {
    //@ts-ignore
    function getKeysFromObj(array) {
      //@ts-ignore
      return array.map((item) => {
        return item.advantage;
      });
    }
    return {
      ...stateForm.main,
      ...stateForm.stepOne,
      ...stateForm.stepTwo,
      about: lastStepData,
      advantages: getKeysFromObj(stateForm.stepTwo.advantages),
      checkboxGroup: stateForm.stepTwo.checkboxGroup !== false ?
        stateForm.stepTwo.checkboxGroup.map((item: string) => parseInt(item)) : false,
      radioGroup: parseInt(stateForm.stepTwo.radioGroup),
    };
  }

   const onSubmit = (data: any) => {
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
        const dataForm = getFormData(state, data.about);
        sendData(dataForm)
          .then(data => {
            console.log(data)
            setModalOn(true);
            if (data.status === "success") {
              setModalSuccessfull(true);
            } else {
              setModalSuccessfull(false)
            }
          })
        break;
    }
  }

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
          <Button 
            disabled={isValid ? false : true} 
            onClick={handleSubmit(onSubmit)} 
            text="Назад" 
            theme={"white"} 
            id="button-back"
          />
        </div>
        <div onClick={forward} className={style.nextContainer}>
          <Button 
            disabled={isValid ? false : true}
            onClick={handleSubmit(onSubmit)}
            text={step >= 3 ? "Отправить" : "Далее"}
            theme={"blue"}
            id={step >= 3 ? "button-send" : "button-next"}
          />
        </div>
      </div>
      {modalOn && <ModalWindow isSuccessfull={modalSuccessfull} setModalOn={setModalOn} />}
    </article>
  )
}

export default Form;