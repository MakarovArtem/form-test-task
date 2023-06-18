import React, { FC } from "react";
import { useAppSelector } from "../../../store/hooks/hooks";
import { Controller } from "react-hook-form";
import Textarea from "../../../components/UI/textArea/Textarea";
import style from "./FormStepThree.module.css";

interface FormStepThreeProps {
  control: any;
  watch: any;
}

const FormStepThree: FC<FormStepThreeProps> = ({control, watch}) => {
  
  const about = useAppSelector(state => state.stepThree.about);

  return (
    <div className={style.form}>
      <div className={style.textareaContaier}>
        <Controller
          name="about"
          control={control}
          defaultValue={about}
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
              watch={watch}
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