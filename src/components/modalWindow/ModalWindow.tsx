import React, { FC } from "react";
import Button from "../UI/button/Button";
import styleSucces from "./ModalWindowSuccess.module.css";
import styleError from "./ModalWindowError.module.css";
import { useNavigate } from "react-router-dom";

interface ModalWindowProps {
  isSuccessfull: boolean;
  setModalOn: any;
}

const ModalWindow: FC<ModalWindowProps> = ({isSuccessfull, setModalOn}) => {

  const style = isSuccessfull ? styleSucces : styleError;
  const title = isSuccessfull ? "Форма успешно отправлена" : "Ошибка";
  const buttonText = isSuccessfull ? "На главную" : "Закрыть";
  const buttonID = isSuccessfull ? "button-to-main" : "button-close";

  const navigate = useNavigate();
  const handleClick = () => {
    if(isSuccessfull) {
      navigate("/");
    } else {
      setModalOn(false);
    }
  }

  return (
    <article onClick={setModalOn(false)} className={style.wrapper}>
      <div onClick={e => e.stopPropagation} className={style.main}>
        <h2 className={style.title}>{title}</h2>
        <div onClick={handleClick} className={style.crossButton}></div>
        <div className={style.pictogramContainer}>
          <div className={style.pictogram}></div>
        </div>
        <div className={style.buttonContainer}>
          <Button onClick={handleClick} text={buttonText} theme={"blue"} id={buttonID} />
        </div>
      </div>
    </article>
  )
}

export default ModalWindow;