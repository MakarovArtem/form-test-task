import React, { FC, useEffect } from "react";
// import AdvantageList from "../../../components/advantageList/AdvantageList";
// import Button from "../../../components/UI/button/Button";
import Checkbox from "../../../components/UI/checkboxGroup/CheckboxGroup";
import Radio from "../../../components/UI/radioGroup/RadioGroup";
import style from "./FormStepTwo.module.css";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/hooks";

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
        <ul>
          {fields.map((item: any, index: any) => (
            <li key={item.id}>
              <input 
                {...register(`advantages.${index}.field-advantages-${index + 1}`, )}
                placeholder="Advantage"
                id={`field-advantages-${index + 1}`}
              />
              <button
                type="button"
                onClick={() => remove(index)}
                id={`button-remove-${index + 1}`}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => append({})}
        >
          append
        </button>
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