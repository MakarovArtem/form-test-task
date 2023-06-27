import React, { FC } from "react";
import { useAppSelector } from "store/hooks/hooks";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "components/UI/input/Input";
import ButtonIcon from "components/UI/buttonIcon/ButtonIcon";
import Button from "components/UI/button/Button";
import Checkbox from "components/UI/checkboxGroup/CheckboxGroup";
import Radio from "components/UI/radioGroup/RadioGroup";
import removeIcon from "icons/remove-icon.svg";
import style from "./FormStepTwo.module.css";

interface FormStepTwoProps {
  stepForward: (data: any) => void;
  stepBack: (data: any) => any;
}

const FormStepTwo: FC<FormStepTwoProps> = ({stepForward, stepBack}) => {

  const schema = yup
    .object()
    .shape({
      advantages: yup.array(yup.object().shape({advantage: yup.string()})),
      checkbox: yup.array(),
      radio: yup.string()
    })
    .required();

  const defaultValues = useAppSelector(state => ({
    advantages: state.form.advantages,
    checkbox: state.form.checkbox,
    radio: state.form.radio,
  }));

  const {
    control,
    register,
    getValues,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: "onTouched",
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "advantages",
  });
 
  function onSubmit(data: any) {
    stepForward(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <div className={style.inputsContainer}>
        <p className={style.inputsTitle}>Advantages</p>
        <ul className={style.advantagesContainer}>
          {fields.map((item: any, index: number) => (
            <li className={style.advantage} key={item.id}>
              <div className={style.inputContainer}>
                <Input
                  key={item.id}
                  register={register}
                  registerProps={(`advantages.${index}.advantage`)}
                  title=""
                  placeholder="Advantage"
                  tip={errors?.advantages?.[index]?.advantage?.message || "Allrighty"}
                  id={`field-advantages-${index+1}`}
                />
              </div>
              <div className={style.removeAdvantageContainer}>
                <ButtonIcon
                  maxWidth="16px"
                  picURL={removeIcon}
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
          onClick={() => append({advantage: ""})}
          id="button-add"
        />
      </div>
      <div className={style.checkboxContainer}>
        <Checkbox
          register={register}
          title="Checkbox group"
          groupName={"checkbox"}
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
          groupName="radio"
          options={[
            {value: "1", id: "field-radio-group-option-1"},
            {value: "2", id: "field-radio-group-option-2"},
            {value: "3", id: "field-radio-group-option-3"},
          ]} 
          id="radio-group"
        />
      </div>
      <div className={style.backContainer}>
        <Button
          onClick={() => stepBack(getValues())}
          text="Назад"
          theme="white"
          id="button-back"
        />
      </div>
      <div className={style.nextContainer}>
        <Button
          type="submit"
          text="Далее"
          theme="blue"
          id="button-next"
        />
      </div>
    </form>
  )
}

export default FormStepTwo;