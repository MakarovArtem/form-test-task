import React, { FC } from "react";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import style from "./MainScreen.module.css";
import Info from "../../components/info/Info";

interface MainScreenProps {}

const MainScreen: FC<MainScreenProps> = () => {

  const {
    control,
    handleSubmit,
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data: any) => {
    if (data?.errors) {

    }
    console.log(JSON.stringify(data))
  }

  return (
    <main className={style.main}>
      <div className={style.infoContainer}>
        <Info />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form} action="#">
        <div className={style.inputContainer}>
          <Controller
            name="phoneNumber"
            control={control}
            defaultValue="+7 961 026-29-17"
            rules={{ 
              required: true, 
              pattern: {value: /^[0-9]+$/, message: "Wrong phone number format"}
            }}
            render={({
              field,
              fieldState: { error },
            }) => (
              <Input
                {...field}
                title='Номер телефона' 
                type='tel' 
                placeholder="+7 (961) 026-29-17"
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
            defaultValue="ARTEMMAKAROV76@YANDEX.RU"
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
            <Button text="Начать" themeBlue={false} id="button-start"/>
        </div>
      </form>
    </main>
  )
}

export default MainScreen;