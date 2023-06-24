import React, { FC, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import InputController from "components/UI/input/InputController";
import Select from "components/UI/select/Select";
import style from "./FormStepOne.module.css";
import { setName, setNickname, setSex, setSurname } from "store/reducers/stepOneSlice";
import { setStepOneValid } from "store/reducers/validSlice";

interface FormStepOneProps {}

const FormStepOne: FC<FormStepOneProps> = () => {
  
  const {
    watch,
    control,
    handleSubmit,
    formState: {isValid}
  } = useForm({ mode: "onTouched"});

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
          rules={{
            required: true,
            maxLength: {value: 30, message: "Max length is 30 symbols"},
            pattern: {value: /^[a-zA-Zа-яА-Я0-9]+$/, message: "Nickname shouldn't consist of symbols, only digits and letters"}
          }}
          render={({
            field,
            fieldState: { error },
          }) => (
            <InputController
              {...field}
              title='Nickname'
              type='text' 
              placeholder="Nagibator777"
              tip={error?.message || "Allrighty"}
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
          rules={{
            required: true,
            maxLength: {value: 50, message: "Max length is 50 symbols"},
            pattern: {value: /^[a-zA-Zа-яА-Я]+$/, message: "Name should consist of only letters"}
          }}
          render={({
            field,
            fieldState: { error },
          }) => (
            <InputController
              {...field}
              title='Name'
              type='text' 
              placeholder="Vaslily"
              tip={error?.message || "Allrighty"}
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
          rules={{
            required: true,
            maxLength: {value: 50, message: "Max length is 50 symbols"},
            pattern: {value: /^[a-zA-Zа-яА-Я]+$/, message: "Surame should consist of only letters"}
          }}
          render={({
            field,
            fieldState: { error },
          }) => (
            <InputController
              {...field}
              title='Surname'
              type='text' 
              placeholder="Pupkin"
              tip={error?.message || "Allrighty"}
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
          rules={{
            required: true,
            pattern: {value: /^(man|woman)$/, message: "You should choose your sex"}
          }}
          render={({
            field,
            fieldState: { error },
          }) => (
            <Select 
              {...field}
              title="Sex"
              options={[
                {value: "man", id: "field-sex-option-man"},
                {value: "woman", id: "field-sex-option-woman"},
              ]}
              tip={error?.message || "Allrighty"}
              id="field-sex"
            />
          )}
        />
      </div>
    </form>
  )
}

export default FormStepOne;