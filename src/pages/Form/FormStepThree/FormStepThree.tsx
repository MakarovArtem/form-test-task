import React, { FC, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { setAbout } from "store/reducers/stepThreeSlice";
import { setStepThreeValid } from "store/reducers/validSlice";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Textarea from "components/UI/textArea/Textarea";

import style from "./FormStepThree.module.css";

interface FormStepThreeProps {}

const FormStepThree: FC<FormStepThreeProps> = () => {
  
  const schema = yup
    .object()
    .shape({
      about: yup.string().max(200, "Max length is 200 symbols"),
    })
    .required();

  const {
    watch,
    control,
    handleSubmit,
    formState: { isValid, errors }
  } = useForm({ mode: "onTouched", resolver: yupResolver(schema)});

  const dispatch = useAppDispatch();

  const aboutDefault = useAppSelector(state => state.stepThree.about);

  const about: any = watch("about");

  useEffect(() => {
    dispatch(setAbout(about));
    dispatch(setStepThreeValid(isValid));
  }, [about, isValid])

  function onSubmit(data: any) {
    console.log("formStepOne data: ", data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <div className={style.textareaContaier}>
        <Controller
          name="about"
          control={control}
          defaultValue={aboutDefault}
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
    </form>
  )
}

export default FormStepThree;