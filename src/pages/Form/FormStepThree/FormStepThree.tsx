import React, { FC } from "react";
import ProgressLine from "../../../components/progressLine/ProgressLine";
import Textarea from "../../../components/UI/textArea/Textarea";
import Button from "../../../components/UI/button/Button";
import style from "./FormStepThree.module.css";

interface FormStepThreeProps {}

const FormStepThree: FC<FormStepThreeProps> = () => {
  
  return (
    <article className={style.main}>
      <div className={style.mainContainer}>
        <ProgressLine step="three" />
        <form className={style.form} action="post">
          <div className={style.textareaContaier}>
            <Textarea title="About" width="auto" id="field-about" placeholder="Placeholder" tip="Tip" />
          </div>
          <div className={style.backContaier}>
            <Button text="Назад" theme={"white"} id="button-back"/>
          </div>
          <div className={style.nextContaier}>
            <Button text="Отправить" theme={"blue"} id="button-send"/>
          </div>
        </form>
      </div>
    </article>
  )
}

export default FormStepThree;