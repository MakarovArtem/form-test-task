import React, { FC } from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import style from "./MainScreen.module.css";

interface MainScreenProps {}

const MainScreen: FC<MainScreenProps> = () => {

  const {
    control,
    register,
    formState: {errors},
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data))
  }

  return (
    <main className={style.main}>
      <div className={style.info}>
        <div className={style.avatarContainer}>
          <p className={style.avatar}>АМ</p>
        </div>
        <div className={style.nameContainer}>
          <p className={style.name}>Артём Макаров</p>
        </div>
        <div className={style.contactsContainer}>
          <ul className={style.contacts}>
            <li className={style.contactContainer}>
              <div className={style.linkIconContainer}>
                <img src="link-icon.svg" alt="link-icon" />
              </div>

              <div className={style.linkContainer}>
                <a className={style.link} href="https://t.me/EineApfelsine" target="_blank">Telegram</a>
              </div>
            </li>
            <li className={style.contactContainer}>
              <div className={style.linkIconContainer}>
                <img src="link-icon.svg" alt="link-icon" />
              </div>
              
              <div className={style.linkContainer}>
                <a className={style.link} href="https://github.com/MakarovArtem" target="_blank">GitHub</a>
              </div>
            </li>
            <li className={style.contactContainer}>
              <div className={style.linkIconContainer}>
                <img src="link-icon.svg" alt="link-icon" />
              </div>
              
              <div className={style.linkContainer}>
                <a className={style.link} href="https://clck.ru/34dfu5" target="_blank">Resume</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.line}></div>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form} action="#">
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
        <div className={style.buttonContainer}>
          <Button text="Начать" themeBlue={false} id="button-start"/>
        </div>
      </form>
    </main>
  )
}

export default MainScreen;