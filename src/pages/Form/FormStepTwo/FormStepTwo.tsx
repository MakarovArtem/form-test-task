import React, { FC, useState, useEffect } from "react";
import ProgressLine from "../../../components/progressLine/ProgressLine";
import AdvantageList from "../../../components/advantageList/AdvantageList";
import Button from "../../../components/UI/button/Button";
import Checkbox from "../../../components/UI/checkbox/Checkbox";
import Radio from "../../../components/UI/radio/Radio";
import style from "./FormStepTwo.module.css";

interface FormStepTwoProps {}

const FormStepTwo: FC<FormStepTwoProps> = () => {
  
  return (
    <article className={style.main}>
      <div className={style.mainContainer}>
        <ProgressLine step="two" />
        <form className={style.form} action="post">
          <div className={style.inputsContainer}>
            <p className={style.inputsTitle}>Advantages</p>
            <AdvantageList count={5} />
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
          <div className={style.backContainer}>
            <Button text="Назад" theme={"white"} id="button-back" />
          </div>
          <div className={style.nextContainer}>
            <Button text="Далее" theme={"blue"} id="button-next" />
          </div>
        </form>
      </div>
    </article>
  )
}

export default FormStepTwo;