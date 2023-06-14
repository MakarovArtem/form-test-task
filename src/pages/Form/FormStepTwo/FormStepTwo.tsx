import React, { FC } from "react";
import AdvantageList from "../../../components/advantageList/AdvantageList";
import Button from "../../../components/UI/button/Button";
import Checkbox from "../../../components/UI/checkbox/Checkbox";
import Radio from "../../../components/UI/radio/Radio";
import style from "./FormStepTwo.module.css";

interface FormStepTwoProps {}

const FormStepTwo: FC<FormStepTwoProps> = () => {
  
  return (
    <aside className={style.stepContainer}>
      <div className={style.inputsContainer}>
        <p className={style.inputsTitle}>Advantages</p>
        <AdvantageList count={3} />
      </div>
      <div className={style.buttonAddContainer}>
        <Button text="+" theme={"white"} id="button-add"/>
      </div>
      <div className={style.checkboxContainer}>
        <Checkbox 
          title="Checkbox group" 
          groupName="checkboxGroup" 
          options={[
            {value: "1", id: "field-checkbox-group-option-1"},
            {value: "2", id: "field-checkbox-group-option-2"},
            {value: "3", id: "field-checkbox-group-option-3"},
          ]} 
          id="checkbox-group"
        />
      </div>
      <div className={style.radioContainer}>
        <Radio 
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
    </aside>
  )
}

export default FormStepTwo;