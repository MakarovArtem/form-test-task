import React, { FC } from "react";
import { useForm, useFieldArray } from "react-hook-form";
// import AdvantageList from "../../../components/advantageList/AdvantageList";
import Button from "../../../components/UI/button/Button";
import Checkbox from "../../../components/UI/checkboxGroup/CheckboxGroup";
import Radio from "../../../components/UI/radioGroup/RadioGroup";
import style from "./FormStepTwo.module.css";

interface FormStepTwoProps {}

const FormStepTwo: FC<FormStepTwoProps> = () => {

  const {
    control,
    register,
    handleSubmit,
    formState: {isValid}
  } = useForm({ mode: "onBlur" });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "advantages"
  });

  // const onSubmit = (data: any) => {
  //   // const check = data.checkboxGroup;
  //   const adv = JSON.stringify(data);
  //   // const arr = check.map((str: string) => parseInt(str));
  //   // data.checkboxGroup = arr
  //   console.log('adv',adv)
  // }

  return (
    <form onSubmit={handleSubmit(data => console.log(JSON.stringify(data)))} className={style.form}>
      <div className={style.inputsContainer}>
        <p className={style.inputsTitle}>Advantages</p>
        <ul>
          {fields.map((item, index) => (
            <li key={item.id}>
              <input {...register(`advantages.${index}.field-advantages-${index + 1}`)} />
              <button type="button" onClick={() => remove(index)}>Delete</button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => append({})}
        >
          append
        </button>
        <input type="submit" />
      </div>

      {/* <div className={style.checkboxContainer}>
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
      </div> */}

    </form>
  )
}

export default FormStepTwo;