import React, { FC } from "react";
import style from "./MainScreen.module.css";

const MainScreen: FC = () => {
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
      <form className={style.form} action="post">
        <div className={style.inputContainer}>
          <p className={style.inputTitle}>Номер телефона</p>
          <input className={style.input} type="tel" placeholder="+7 999 999-99-99"/>
        </div>
        <div className={style.inputContainer}>
          <p className={style.inputTitle}>Email</p>
          <input className={style.input} type="email" placeholder="tim.jennings@example.com" />
        </div>
        <button className={style.button} id="button-start">Начать</button>
      </form>
    </main>
  )
}

export default MainScreen;