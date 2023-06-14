import React, { FC } from "react";
import ProgressLine from "../../../components/progressLine/ProgressLine";
import Input from "../../../components/UI/input/Input";
import Select from "../../../components/UI/select/Select";
import Button from "../../../components/UI/button/Button";
import style from "./FormStepOne.module.css";

interface FormStepOneProps {}

const FormStepOne: FC<FormStepOneProps> = () => {
 
  return (
    <article className={style.main}>
      <div className={style.mainContainer}>
        <ProgressLine step="one" />
        <form className={style.form} action="#">
          <div className={style.nickContainer}>
            <Input 
              title="Nickname" 
              type="text" 
              tip="Tip" 
              id="field-nickname"
            />
          </div>
          <div className={style.nameContainer}>
            <Input 
              title="Name" 
              type="text" 
              tip="Tip" 
              id="field-name"
            />
          </div>
          <div className={style.surnameContainer}>
            <Input 
              title="Surname"
              type="text"
              tip="Tip"
              id="field-surname"
            />
          </div>
          <div className={style.sexContainer}>
            <Select 
              title="Sex"
              tip="Tip"
              variants={["man", "woman"]} 
              optionsId={["field-sex-option-man", "field-sex-option-woman"]}
              id="field-sex"
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

export default FormStepOne;