import React, { FC } from "react";
import { useForm, UseFormRegister, FieldValues } from "react-hook-form";
import ButtonIcon from "../UI/buttonIcon/ButtonIcon";
import style from "./AdvantageList.module.css";

interface AdvantageListProps {
  count?: number;
  groupName?: any;
  control: any;
  index: any;
  remove: any;
  value: any;
  register: any;
  update: any;
  // register: UseFormRegister<FieldValues>;
}

const AdvantageList: FC<AdvantageListProps> = ({count = 3, update, groupName, control, value, remove, index, register}) => {

  // const { register, handleSubmit } = useForm({});

  return (
    <div className={style.advantageContainer} key={value.id}>
      <div className={style.inputContainer}>
        <input
          placeholder="Advantage"
          {...register(`field-${groupName}-${index}`,)}
        />
      </div>
      <div className={style.removeAdvantageContainer}>
        <ButtonIcon
          picURL="icons/delete-icon.svg"
          id={`button-remove-${index}`}
          onClick={() => remove(index)}
        />
        {/* <button type="button"
          onClick={
            handleSubmit((data) => {
              console.log(data)
            })
          }
        >
          submit
        </button> */}
      </div>
    </div>
  )
}

export default AdvantageList;