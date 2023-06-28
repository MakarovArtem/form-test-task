import React, { FC } from "react";
import { useAppSelector } from "redux/hooks/hooks";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputController from "components/UI/input/InputController";
import Select from "components/UI/select/Select";
import Button from "components/UI/button/Button";
import style from "./StepOne.module.css";

interface StepOneProps {
  forward: (data: FormData) => void;
  back: (data: {}) => void;
}

const StepOne: FC<StepOneProps> = ({forward, back}) => {

  const schema = yup
    .object()
    .shape({
      nickname: yup.string()
        .required("Nickname is required")
        .max(30, "Max length is 30 symbols")
        .matches(/^[a-zA-Zа-яА-Я0-9]+$/, "Only digits and letters allowed"),
      name: yup.string()
        .required("Name is required")
        .max(50, "Max length is 50 symbols")
        .matches(/^[a-zA-Zа-яА-Я]+$/, "Only letters allowed"),
      surname: yup.string()
        .required("Surname is required")
        .max(50, "Max length is 50 symbols")
        .matches(/^[a-zA-Zа-яА-Я]+$/, "Only letters allowed"),
      sex: yup.string()
        .required("Sex is required")
        .matches(/^(man|woman)$/, "Please, choose your gender"),
    })
    .required();

  const defaultValues = useAppSelector(state => ({
    nickname: state.form.nickname,
    name: state.form.name,
    surname: state.form.surname,
    sex: state.form.sex,
  }));

  const {
    control,
    getValues,
    handleSubmit,
    formState: {errors}
  } = useForm({
    mode: "onTouched",
    defaultValues: defaultValues,
    resolver: yupResolver(schema)
  });

  function onSubmit(data: any) {
    forward(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <div className={style.nickContainer}>
        <Controller
          name="nickname"
          control={control}
          render={({
            field,
          }) => (
            <InputController
              {...field}
              title='Nickname'
              type='text' 
              placeholder="@Nickname"
              tip={errors.nickname?.message || "Correct"}
              id="field-nickname"
            />
          )}
        />
      </div>
      <div className={style.nameContainer}>
        <Controller
          name="name"
          control={control}
          render={({
            field,
          }) => (
            <InputController
              {...field}
              title='Name'
              type='text' 
              placeholder="John"
              tip={errors.name?.message || "Correct"}
              id="field-name"
            />
          )}
        />
      </div>
      <div className={style.surnameContainer}>
        <Controller
          name="surname"
          control={control}
          render={({
            field,
          }) => (
            <InputController
              {...field}
              title='Surname'
              type='text' 
              placeholder="Williams"
              tip={errors.surname?.message || "Correct"}
              id="field-surname"
            />
          )}
        />
      </div>
      <div className={style.sexContainer}>
        <Controller
          name="sex"
          control={control}
          render={({
            field,
          }) => (
            <Select 
              {...field}
              title="Sex"
              options={[
                {value: "not chosen", id: "field-sex-option-notChosen"},
                {value: "man", id: "field-sex-option-man"},
                {value: "woman", id: "field-sex-option-woman"},
              ]}
              tip={errors.sex?.message || "Correct"}
              id="field-sex"
            />
          )}
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

export default StepOne;