import React, { FC, useEffect } from "react";
// import AdvantageList from "../../../components/advantageList/AdvantageList";
// import Button from "../../../components/UI/button/Button";
import Checkbox from "../../../components/UI/checkboxGroup/CheckboxGroup";
import Radio from "../../../components/UI/radioGroup/RadioGroup";
import style from "./FormStepTwo.module.css";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/hooks";
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

  const advantages = useAppSelector(state => state.stepTwo.advantages);
  const checkboxGroup = useAppSelector(state => state.stepTwo.checkboxGroup);
  const radioGroup = useAppSelector(state => state.stepTwo.radioGroup);

  return (
    <div className={style.form}>
      <button onClick={() => console.log(advantages)}>advantages</button>
      <button onClick={() => console.log(checkboxGroup)}>checkboxGroup</button>
      <button onClick={() => console.log(radioGroup)}>radioGroup</button>
      <div className={style.inputsContainer}>
        <p className={style.inputsTitle}>Advantages</p>
        <ul className={style.advantagesContainer}>
          {fields.map((item: any, index: any) => (
            <li className={style.advantage} key={item.id}>
              <div className={style.inputContainer}>
                <Input
                  register={register}
                  index={index}
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