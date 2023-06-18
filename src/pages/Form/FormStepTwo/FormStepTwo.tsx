import React, { FC } from "react";
import Checkbox from "../../../components/UI/checkboxGroup/CheckboxGroup";
import Radio from "../../../components/UI/radioGroup/RadioGroup";
import style from "./FormStepTwo.module.css";
import Input from "../../../components/UI/input/Input";
import Button from "../../../components/UI/button/Button";
import ButtonIcon from "../../../components/UI/buttonIcon/ButtonIcon";

interface FormStepTwoProps {
  register: any;
  remove: any;
  append: any;
  fields: any;
}

const FormStepTwo: FC<FormStepTwoProps> = ({register, remove, append, fields}) => {

  return (
    <div className={style.form}>
      <div className={style.inputsContainer}>
        <p className={style.inputsTitle}>Advantages</p>
        <ul className={style.advantagesContainer}>
          {fields.map((item: any, index: any) => (
            <li className={style.advantage} key={item.id}>
              <div className={style.inputContainer}>
                <Input
                  register={register}
                  registerProps={(`advantages.${index}.field-advantages-${index}`)}
                  title=""
                  placeholder="Advantage"
                  id={`field-advantages-${index+1}`}
                />
              </div>
              <div className={style.removeAdvantageContainer}>
                <ButtonIcon
                  maxWidth="16px"
                  picURL="icons/delete-icon.svg"
                  onClick={() => remove(index)}
                  id={`button-remove-${index+1}`}
                />
              </div>
            </li>
          ))}
        </ul>
        <Button
          type="button"
          text="+"
          onClick={() => append({})}
          id="button-add"
        />
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
    </div>
  )
}

export default FormStepTwo;