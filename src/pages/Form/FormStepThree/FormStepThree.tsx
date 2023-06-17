import React, { FC } from "react";
import { Controller } from "react-hook-form";
import Textarea from "../../../components/UI/textArea/Textarea";
import style from "./FormStepThree.module.css";

interface FormStepThreeProps {
  control: any;
}

const FormStepThree: FC<FormStepThreeProps> = ({control}) => {
  
  return (
    <div className={style.form}>
      <div className={style.textareaContaier}>
        <Controller
          name="about"
          control={control}
          defaultValue=" "
          rules={{
            required: true,
            maxLength: {value: 200, message: "Max length is 200 symbols"},
          }}
          render={({
            field,
            fieldState: { error },
          }) => (
            <Textarea
              {...field}
              title="About"
              width="auto"
              placeholder="Placeholder"
              tip={error?.message || "Allrighty"}
              id="field-about"
            />
          )}
        />
      </div>
    </div>
  )
}

export default FormStepThree;