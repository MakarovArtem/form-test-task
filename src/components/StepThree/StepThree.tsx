import React, { FC } from "react";
import { useAppSelector } from "redux/hooks/hooks";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Textarea from "components/UI/textArea/Textarea";
import Button from "components/UI/button/Button";
import style from "./StepThree.module.css";

interface StepThreeProps {
  stepForward: (data: FormData) => void;
  stepBack: (data: {}) => void;
}

const StepThree: FC<StepThreeProps> = ({stepForward, stepBack}) => {
  
  const schema = yup
    .object()
    .shape({
      about: yup
        .string()
        .max(200, "Max length is 200 symbols")
        .required("Please, write something about yourself"),
    });

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
              placeholder="Some text about yourself"
              tip={errors.about?.message || "Correct"}
              id="field-about"
            />
          )}
        />
      </div>
      <div className={style.backContainer}>
        <Button
          onClick={() => stepBack(getValues())}
          text="Back"
          theme="white"
          id="button-back"
        />
      </div>
      <div className={style.nextContainer}>
        <Button
          type="submit"
          text="Submit"
          theme="blue"
          id="button-next"
        />
      </div>
    </form>
  )
}

export default StepThree;