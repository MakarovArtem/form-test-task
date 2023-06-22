import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/hooks";
import { Controller, useForm } from "react-hook-form";
import Textarea from "../../../components/UI/textArea/Textarea";
import style from "./FormStepThree.module.css";
import { setAbout } from "store/reducers/stepThreeSlice";
import { setStepThreeValid } from "store/reducers/validSlice";

interface FormStepThreeProps {}

const FormStepThree: FC<FormStepThreeProps> = () => {
  
  const {
    watch,
    control,
    handleSubmit,
    formState: { isValid }
  } = useForm({ mode: "onTouched"});

  const dispatch = useAppDispatch();

  const aboutDefault = useAppSelector(state => state.stepThree.about);

  const about = watch("about");

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
    </form>
  )
}

export default FormStepThree;