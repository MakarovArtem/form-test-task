import React, { FC } from "react";
import Textarea from "../../../components/UI/textArea/Textarea";
import style from "./FormStepThree.module.css";

interface FormStepThreeProps {}

const FormStepThree: FC<FormStepThreeProps> = () => {
  
  return (
    <aside className={style.stepContainer}>
      <div className={style.textareaContaier}>
        <Textarea title="About" width="auto" id="field-about" placeholder="Placeholder" tip="Tip" />
      </div>
    </aside>
  )
}

export default FormStepThree;