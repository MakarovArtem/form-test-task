import React, { FC } from "react";
import { useForm } from "react-hook-form";
import AdvantageList from "../../../components/advantageList/AdvantageList";
import Checkbox from "../../../components/UI/checkboxGroup/CheckboxGroup";
import Radio from "../../../components/UI/radioGroup/RadioGroup";
import style from "./FormStepTwo.module.css";

interface FormStepTwoProps {}

const FormStepTwo: FC<FormStepTwoProps> = () => {

  const {
    register,
    handleSubmit,
    formState: {isValid}
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data: any) => {
    // const check = data.checkboxGroup;
    // const arr = check.map((str: string) => parseInt(str));
    // data.checkboxGroup = arr
    // console.log('heu',data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <div className={style.inputsContainer}>
        <p className={style.inputsTitle}>Advantages</p>
        <AdvantageList count={3} />
      </div>
      <div className={style.checkboxContainer}>
        <Checkbox
          register={register}
          title="Checkbox group"
          groupName={"checkboxGroup"}
          options={[
            { value: "1", id: "field-checkbox-group-option-1" }, 
            { value: "2", id: "field-checkbox-group-option-2" }, 
            { value: "3", id: "field-checkbox-group-option-3" }, 
          ]}
          id="checkbox-group"
        />
      </div>
      <div className={style.radioContainer}>
        <Radio
          register={register}
          title="Radio group" 
          groupName="radioGroup"
          options={[
            {value: "1", id: "field-radio-group-option-1"},
            {value: "2", id: "field-radio-group-option-2"},
            {value: "3", id: "field-radio-group-option-3"},
          ]} 
          id="radio-group"
        />
      </div>
      <input type="submit" />
    </form>
  )
}

export default FormStepTwo;