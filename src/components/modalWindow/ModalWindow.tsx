import React, { FC } from "react";
import Button from "../UI/button/Button";
import styleSucces from "./ModalWindowSuccess.module.css";
import styleError from "./ModalWindowError.module.css";

interface ModalWindowProps {
  isSuccessfull: boolean;
}

const ModalWindow: FC<ModalWindowProps> = ({isSuccessfull}) => {

  const style = isSuccessfull ? styleSucces : styleError;
  const title = isSuccessfull ? "Форма успешно отправлена" : "Ошибка";
  const buttonText = isSuccessfull ? "На главную" : "Закрыть";
  const buttonID = isSuccessfull ? "button-to-main" : "button-close";

  return (
    <article className={style.main}>
      <h2 className={style.title}>{title}</h2>
      <div className={style.crossButton}></div>
      <div className={style.pictogramContainer}>
        <div className={style.pictogram}></div>
      </div>
      <div className={style.buttonContainer}>
        <Button text={buttonText} themeBlue={true} id={buttonID} />
      </div>
    </article>
  )
}

export default ModalWindow;