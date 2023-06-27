import React, { FC } from "react";
import { useAppSelector } from "store/hooks/hooks";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Textarea from "components/UI/textArea/Textarea";
import Button from "components/UI/button/Button";
import style from "./FormStepThree.module.css";

interface FormStepThreeProps {
  stepForward: (data: any) => void;
  stepBack: (data: any) => any;
}

const FormStepThree: FC<FormStepThreeProps> = ({stepForward, stepBack}) => {
  
  const schema = yup
    .object()
    .shape({
      about: yup.string().max(200, "Max length is 200 symbols"),
    })
    .required();

  const defaultValues = useAppSelector(state => ({
    about: state.form.about,
    checkbox: state.form.checkbox,
    radio: state.form.radio,
  }));

  const {
    watch,
    control,
    getValues,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: "onTouched",
    defaultValues: defaultValues,
    resolver: yupResolver(schema)
  });

  function onSubmit(data: any) {
    stepForward(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <div className={style.textareaContaier}>
        <Controller
          name="about"
          control={control}
          render={({
            field,
          }) => (
            <Textarea
              {...field}
              watch={watch}
              title="About"
              width="auto"
              placeholder="Placeholder"
              tip={errors.about?.message || "Allrighty"}
              id="field-about"
            />
          )}
        />
      </div>
      <div className={style.backContainer}>
        <Button
          onClick={() => stepBack(getValues())}
          text="Назад"
          theme="white"
          id="button-back"
        />
      </div>
      <div className={style.nextContainer}>
        <Button
          type="submit"
          text="Отправить"
          theme="blue"
          id="button-next"
        />
      </div>
    </form>
  )
}

export default FormStepThree;