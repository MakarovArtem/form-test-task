import React, { FC } from "react";
import { useAppSelector } from "redux/hooks/hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "components/UI/button/Button";
import Checkbox from "components/UI/checkboxGroup/CheckboxGroup";
import Radio from "components/UI/radioGroup/RadioGroup";
import style from "./StepTwo.module.css";
import Advantages from "components/Advantages/Advantages";

interface StepTwoProps {
  forward: (data: FormData) => void;
  back: (data: {}) => void;
}

const StepTwo: FC<StepTwoProps> = ({forward, back}) => {

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
 
  function onSubmit(data: any) {
    forward(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <div className={style.advantageContainer}>
        <Advantages
          control={control}
          register={register}
          errors={errors}
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
          onClick={() => back(getValues())}
          text="Back"
          theme="white"
          id="button-back"
        />
      </div>
      <div className={style.nextContainer}>
        <Button
          type="submit"
          text="Next"
          theme="blue"
          id="button-next"
        />
      </div>
    </form>
  )
}

export default StepTwo;