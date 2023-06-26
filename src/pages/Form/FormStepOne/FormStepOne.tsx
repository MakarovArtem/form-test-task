import React, { FC, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { setName, setNickname, setSex, setSurname } from "store/reducers/stepOneSlice";
import { setStepOneValid } from "store/reducers/validSlice";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import InputController from "components/UI/input/InputController";
import Select from "components/UI/select/Select";

import style from "./FormStepOne.module.css";

interface FormStepOneProps {}

const FormStepOne: FC<FormStepOneProps> = () => {

  const schema = yup
    .object()
    .shape({
      nickname: yup.string()
        .required("Nickname is required")
        .max(30, "Max length is 30 symbols")
        .matches(/^[a-zA-Zа-яА-Я0-9]+$/, "Nickname should consist of only digits and letters"),
      name: yup.string()
        .required("Name is required")
        .max(50, "Max length is 50 symbols")
        .matches(/^[a-zA-Zа-яА-Я]+$/, "Name should consist of only letters"),
      surname: yup.string()
        .required("Surname is required")
        .max(50, "Max length is 50 symbols")
        .matches(/^[a-zA-Zа-яА-Я]+$/, "Surname should consist of only letters"),
      sex: yup.string()
        .required("Sex is required")
        .matches(/^(man|woman)$/, "There are only two genders"),
    })
    .required();

  const {
    watch,
    control,
    handleSubmit,
    formState: {isValid, errors}
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema)
  });

  const dispatch = useAppDispatch();

  const nicknameDefault = useAppSelector(state => state.stepOne.nickname);
  const nameDefault = useAppSelector(state => state.stepOne.name);
  const surnameDefault = useAppSelector(state => state.stepOne.surname);
  const sexDefault = useAppSelector(state => state.stepOne.sex);

  const nickname = watch("nickname");
  const name = watch("name");
  const surname = watch("surname");
  const sex = watch("sex");

  useEffect(() => {
    dispatch(setNickname(nickname));
    dispatch(setName(name));
    dispatch(setSurname(surname));
    dispatch(setSex(sex));
    dispatch(setStepOneValid(isValid));
  }, [nickname, name, surname, sex, isValid])

  function onSubmit(data: any) {
    console.log("formStepOne data: ", data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <div className={style.nickContainer}>
        <Controller
          name="nickname"
          control={control}
          defaultValue={nicknameDefault}
          render={({
            field,
          }) => (
            <InputController
              {...field}
              title='Nickname'
              type='text' 
              placeholder="Nagibator777"
              tip={errors.nickname?.message || "Allrighty"}
              id="field-nickname"
            />
          )}
        />
      </div>
      <div className={style.nameContainer}>
        <Controller
          name="name"
          control={control}
          defaultValue={nameDefault}
          render={({
            field,
          }) => (
            <InputController
              {...field}
              title='Name'
              type='text' 
              placeholder="Vaslily"
              tip={errors.name?.message || "Allrighty"}
              id="field-name"
            />
          )}
        />
      </div>
      <div className={style.surnameContainer}>
        <Controller
          name="surname"
          control={control}
          defaultValue={surnameDefault}
          render={({
            field,
          }) => (
            <InputController
              {...field}
              title='Surname'
              type='text' 
              placeholder="Pupkin"
              tip={errors.surname?.message || "Allrighty"}
              id="field-surname"
            />
          )}
        />
      </div>
      <div className={style.sexContainer}>
        <Controller
          name="sex"
          control={control}
          defaultValue={sexDefault}
          render={({
            field,
          }) => (
            <Select 
              {...field}
              title="Sex"
              options={[
                {value: "not chosen", id: "field-sex-option-not-chosen"},
                {value: "man", id: "field-sex-option-man"},
                {value: "woman", id: "field-sex-option-woman"},
              ]}
              tip={errors.sex?.message || "Allrighty"}
              id="field-sex"
            />
          )}
        />
      </div>
    </form>
  )
}

export default FormStepOne;