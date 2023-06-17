import React, { FC } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Input from "../../components/UI/input/Input";
import Button from "../../components/UI/button/Button";
import style from "./MainPage.module.css";
import Info from "../../components/info/Info";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { setEmail, setNumber } from "../../store/reducers/mainSlice";

interface MainScreenProps {}

const MainScreen: FC<MainScreenProps> = () => {

  const {
    control,
    handleSubmit,
    formState: {isValid}
  } = useForm({ mode: "onBlur" });

  
  const numberDef = useAppSelector(state => state.main.phoneNumber);
  const emailDef = useAppSelector(state => state.main.emailAdress);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  const onSubmit = (data: any) => {
    dispatch(setNumber(data.phoneNumber));
    dispatch(setEmail(data.emailAdress));
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
            name="phoneNumber"
            control={control}
            defaultValue={numberDef}
            rules={{ 
              required: true, 
              pattern: {value: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, message: "Wrong phone number format"},
            }}
            render={({
              field,
              fieldState: { error },
            }) => (
              <Input
                {...field}
                disabled={true}
                title='Номер телефона' 
                type='tel' 
                placeholder="+7 (961) 026-**-**"
                tip={error?.message || "Allrighty"}
                id="filed-number"
              />
            )}
          />
        </div>
        <div className={style.inputContainer}>
          <Controller
            name="emailAdress"
            control={control}
            defaultValue={emailDef}
            rules={{ 
              required: true,
              pattern: {value: /^[\w.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,10})+$/, message: "Wrong email format"}
            }}
            render={({
              field,
              fieldState: { error },
            }) => (
              <Input
                {...field}
                disabled={false}
                title='Email' 
                type='email'
                placeholder="ARTEMMAKAROV76@YANDEX.RU"
                tip={error?.message || "Allrighty"}
                id="filed-email"
              />
            )}
          />
        </div>
        <div className={style.buttonContainer}>
          <Button onClick={handleSubmit(onSubmit)} text="Начать" theme={"white"} id="button-start"/>
        </div>
      </form>
    </main>
  )
}

export default MainScreen;