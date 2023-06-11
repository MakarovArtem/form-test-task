import React, { FC } from "react";
import styleError from "./ModalWindowError.module.css";
import styleSucces from "./ModalWindowSuccess.module.css";
import Button from "../button/Button";

interface ModalWindowProps {
  isSuccessfull: boolean;
}

const ModalWindow: FC<ModalWindowProps> = ({isSuccessfull}) => {

  // if(isSuccessfull){
  //   const style = styleSucces;
  //   const title = "Форма успешно отправлена";
  //   const buttonText = "На главную";
  //   const buttonID = "button-to-main";
  // } else {
  //   const style = styleError;
  //   const title = "Ошибка";
  //   const buttonText = "Закрыть";
  //   const buttonID = "button-close";
  // }

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