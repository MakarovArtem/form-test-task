import React, { FC } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import style from "./MainScreen.module.css";

interface MainScreenProps {}

const MainScreen: FC<MainScreenProps> = () => {

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
      <form className={style.form} action="#">
        <div>
          <Input 
            title='Номер телефона' 
            type='tel' 
            placeholder="+7 999 999-99-99" 
            id="filed-number"
          />
        </div>
        <div>
          <Input 
            title='Email'
            type='email'
            placeholder="tim.jennings@example.com"
            id="filed-email"
          />
        </div>
        <div>
          <Button text="Начать" themeBlue={false} id="button-start"/>
        </div>
      </form>
    </main>
  )
}

export default MainScreen;