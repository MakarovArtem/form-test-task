import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/button/Button";
import styleSucces from "./ModalWindowSuccess.module.css";
import styleError from "./ModalWindowError.module.css";

interface ModalWindowProps {
  isSuccessfull: boolean;
  message: string;
  setModalOn: any;
}

const ModalWindow: FC<ModalWindowProps> = ({isSuccessfull, message, setModalOn}) => {

  const style = isSuccessfull ? styleSucces : styleError;
  const buttonText = isSuccessfull ? "На главную" : "Закрыть";
  const buttonID = isSuccessfull ? "button-to-main" : "button-close";

  const navigate = useNavigate();
  const handleClick = () => {
    if(isSuccessfull) {
      setModalOn(false);
      navigate("/");
    } else {
      setModalOn(false);
    }
  }

  return (
    <article className={style.wrapper}>
      <div className={style.main}>
        <h2 className={style.title}>{message}</h2>
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