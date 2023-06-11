import React, { FC } from "react";
import style from "./FormStepThree.module.css";
import ProgressLine from "../../components/progressLine/ProgressLine";
import Textarea from "../../components/textArea/Textarea";
import Button from "../../components/button/Button";

interface FormStepThreeProps {}

const FormStepThree: FC<FormStepThreeProps> = () => {
  return (
    <article className={style.main}>
      <div className={style.mainContainer}>
        <ProgressLine step="three" />
        <form className={style.form} action="post">
          <div className={style.textareaContaier}>
            <Textarea title="About" width="100%" id="field-about" placeholder="Placeholder" tip="Tip" />
          </div>
          <div className={style.backContaier}>
            <Button text="Назад" themeBlue={false} id="button-back"/>
          </div>
          <div className={style.nextContaier}>
            <Button text="Отправить" themeBlue={true} id="button-send"/>
          </div>
        </form>
      </div>
    </article>
  )
}

export default FormStepThree;