import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "components/UI/button/Button";
import style from "./Error.module.css";

const Error = () => {

  const navigate = useNavigate();

  function buttonHandler() {
    navigate("/");
  }

  return (
    <article className={style.main}>
      <h1 className={style.title}>Error 404</h1>
      <p className={style.text}>Page not found</p>
      <p className={style.text}>Check the URL adress or go to main page ! :)</p>
      <div className={style.buttonContainer}>
        <Button onClick={buttonHandler} text="To main" theme={"blue"} id="back-to-main"/>
      </div>
    </article>
  )
}

export default Error;