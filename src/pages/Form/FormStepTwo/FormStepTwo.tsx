import React, { FC, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { setAdvantages, setCheckbox, setRadio } from "store/reducers/stepTwoSlice";
import { setStepTwoValid } from "store/reducers/validSlice";

import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Input from "components/UI/input/Input";
import ButtonIcon from "components/UI/buttonIcon/ButtonIcon";
import Button from "components/UI/button/Button";
import Checkbox from "components/UI/checkboxGroup/CheckboxGroup";
import Radio from "components/UI/radioGroup/RadioGroup";

import style from "./FormStepTwo.module.css";

import removeIcon from "icons/remove-icon.svg";

interface FormStepTwoProps {}

const FormStepTwo: FC<FormStepTwoProps> = () => {

  const dispatch = useAppDispatch();

  const advantagesDefault = useAppSelector(state => state.stepTwo.advantages);
  const checkboxDefault = useAppSelector(state => state.stepTwo.checkbox);
  const radioDefault = useAppSelector(state => state.stepTwo.radio);

  const schema = yup
    .object()
    .shape({
      advantages: yup.array(yup.object().shape({advantage: yup.string()})),
      checkbox: yup.mixed(), // хрен знает почему нижнее выражение не работает
      // checkbox: yup.mixed().oneOf([yup.array().of(yup.string()), yup.boolean()]),
      radio: yup.string()
    })
    .required();

  const {
    watch,
    control,
    register,
    handleSubmit,
    formState: { isValid, errors }
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      advantages: [...advantagesDefault],
      checkbox: checkboxDefault,
      radio: radioDefault
    },
    resolver: yupResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "advantages",
  });
 
  const advantages = watch("advantages");
  const checkbox: any = watch("checkbox");
  const radio: any = watch("radio");

  useEffect(() => {
    dispatch(setAdvantages(JSON.parse(JSON.stringify(advantages))));
    dispatch(setCheckbox(checkbox));
    dispatch(setRadio(radio));
    dispatch(setStepTwoValid(isValid));
  }, [advantages, checkbox, radio, isValid])

  function onSubmit(data: any) {
    console.log("formStepOne data: ", data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      {/* <div onClick={()=> {
        console.log(errors.checkbox?.message, "check");
        console.log(errors.advantages?.message, "adv");
        console.log(errors.radio?.message, "radio");
      }}>
        errors
      </div> */}
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
    </form>
  )
}

export default FormStepTwo;