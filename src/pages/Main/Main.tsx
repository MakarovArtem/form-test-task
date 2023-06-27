import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "redux/hooks/hooks";
import { updateFormData } from "redux/reducers/formSlice";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PatternFormat } from "react-number-format";
import Info from "components/Info/Info";
import InputController from "components/UI/input/InputController";
import Button from "components/UI/button/Button";
import styleInput from "components/UI/input/Input.module.css";
import style from "./Main.module.css";

const Main: FC = () => {
  
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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

  const defaultValues = useAppSelector(state => ({
    phone: state.form.phone,
    email: state.form.email,
  }));

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: "onTouched",
    defaultValues: defaultValues,
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: any) => {
    dispatch(updateFormData(data));
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
            render={({
              field,
            }) => (
              <div className={styleInput.inputContainer}>
                <p className={styleInput.inputTitle}>Number</p>
                <PatternFormat
                  format="+7 (###) ###-##-##"
                  placeholder="+7 (800) 555-35-35"
                  {...field}
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
          <Button type="submit" text="Начать" theme={"blue"} id="button-start"/>
        </div>
      </form>
    </main>
  )
}

export default Main;