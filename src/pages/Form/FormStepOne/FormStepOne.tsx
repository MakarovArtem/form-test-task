import React, { FC } from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "../../../components/UI/input/Input";
import Select from "../../../components/UI/select/Select";
import style from "./FormStepOne.module.css";

interface FormStepOneProps {}

const FormStepOne: FC<FormStepOneProps> = () => {

  const {
    control,
    handleSubmit,
    formState: {isValid}
  } = useForm({ mode: "onBlur" });

  const onSubmit = () => {
    
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <div className={style.nickContainer}>
        <Controller
          name="nickname"
          control={control}
          defaultValue="EineApfelsine"
          rules={{
            required: true,
            maxLength: {value: 30, message: "Max length is 30 symbols"},
            pattern: {value: /^[a-zA-Zа-яА-Я0-9]+$/, message: "Nickname shouldn't consist of symbols, only digits and letters"}
          }}
          render={({
            field,
            fieldState: { error },
          }) => (
            <Input
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
          defaultValue="Artem"
          rules={{
            required: true,
            maxLength: {value: 50, message: "Max length is 50 symbols"},
            pattern: {value: /^[a-zA-Zа-яА-Я]+$/, message: "Name should consist of only letters"}
          }}
          render={({
            field,
            fieldState: { error },
          }) => (
            <Input
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
          defaultValue="Makarov"
          rules={{
            required: true,
            maxLength: {value: 50, message: "Max length is 50 symbols"},
            pattern: {value: /^[a-zA-Zа-яА-Я]+$/, message: "Surame should consist of only letters"}
          }}
          render={({
            field,
            fieldState: { error },
          }) => (
            <Input
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
          defaultValue=" "
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