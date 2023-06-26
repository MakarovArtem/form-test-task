import React, { FC } from "react";

import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { setEmail, setNumber } from "store/reducers/mainSlice";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { PatternFormat } from "react-number-format";

import Info from "components/info/Info";
import InputController from "components/UI/input/InputController";
import Button from "components/UI/button/Button";

import styleInput from "components/UI/input/Input.module.css";
import style from "./MainPage.module.css";

interface MainScreenProps {}

const MainScreen: FC<MainScreenProps> = () => {
  
  const navigate = useNavigate();

  const schema = yup
    .object()
    .shape({
      phone: yup.string()
        .required("Phone number is required")
        .matches(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, "Wrong phone number format"),
      email: yup.string()
        .required("Email adress is required")
        .email("Wrong email format")
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: {isValid, errors}
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema)
  });

  const dispatch = useAppDispatch();
  const numberDef = useAppSelector(state => state.main.phone);
  const emailDef = useAppSelector(state => state.main.email);
  
  const onSubmit = (data: any) => {
    dispatch(setNumber(data.phone));
    dispatch(setEmail(data.email));
    navigate("/create");
  }

  return (
    <main className={style.main}>
      <div className={style.infoContainer}>
        <Info />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <div className={style.inputContainer}>
          <Controller
            name="phone"
            control={control}
            defaultValue={numberDef}
            render={({
              field,
            }) => (
              <div className={styleInput.inputContainer}>
                <p className={styleInput.inputTitle}>Number</p>
                <PatternFormat
                  format="+7 (###) ###-##-##"
                  placeholder="+7 (800) 555-35-35"
                  {...field}
                  style={{background: "rgba(0, 0, 0, 0.04)"}}
                  className={styleInput.input}
                  id="field-number"
                />
                <p className={styleInput.inputTip}>{errors.phone?.message || "Alrighty"}</p>
              </div>
            )}
          />
        </div>
        <div className={style.inputContainer}>
          <Controller
            name="email"
            control={control}
            defaultValue={emailDef}
            render={({
              field,
            }) => (
              <InputController
                {...field}
                title='Email' 
                type='email'
                placeholder="ARTEMMAKAROV76@YANDEX.RU"
                tip={errors.email?.message || "Alrighty"}
                id="filed-email"
              />
            )}
          />
        </div>
        <div className={style.buttonContainer}>
          <Button onClick={handleSubmit(onSubmit)} text="Начать" theme={"blue"} id="button-start"/>
        </div>
      </form>
    </main>
  )
}

export default MainScreen;