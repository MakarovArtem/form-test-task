import React, { FC } from "react";
import Input from "../../../components/UI/input/Input";
import Select from "../../../components/UI/select/Select";
import style from "./FormStepOne.module.css";

interface FormStepOneProps {}

const FormStepOne: FC<FormStepOneProps> = () => {
 
  return (
    <aside className={style.stepContainer}>
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
    </aside>
  )
}

export default FormStepOne;