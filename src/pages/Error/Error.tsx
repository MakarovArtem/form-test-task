import React from "react";
import Button from "../../components/UI/button/Button";
import style from "./Error.module.css";

const Error = () => {
  return (
    <article className={style.main}>
      <h1 className={style.title}>Error 404</h1>
      <p className={style.text}>Такой страницы нет</p>
      <p className={style.text}>Проверьте, правильно ли вы ввели адрес, или вернитесь на главную ! :)</p>
      <div className={style.buttonContainer}>
        <Button text="На главную" themeBlue={true} id="back-to-main"/>
      </div>
    </article>
  )
}

export default Error;