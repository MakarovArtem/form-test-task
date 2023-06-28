import React, { FC } from "react";
import { useFieldArray } from "react-hook-form";
import Input from "components/UI/input/Input";
import Button from "components/UI/button/Button";
import ButtonIcon from "components/UI/buttonIcon/ButtonIcon";
import removeIcon from "assets/icons/remove-icon.svg";
import style from "./Advantages.module.css";

interface AdvantagesProps{
  control: any;
  register: any;
  errors: any;
}

const Advantages: FC<AdvantagesProps> = ({control, register, errors}) => {

  const { fields, append, remove } = useFieldArray({
    control,
    name: "advantages",
  });

  return (
    <>
      <p className={style.advanatagesTitle}>Advantages</p>
      <ul className={style.advantagesContainer}>
        {fields.map((item: any, index: number) => (
          <li className={style.advantage} key={item.id}>
            <div className={style.inputContainer}>
              <Input
                key={item.id}
                register={register}
                registerProps={(`advantages.${index}.advantage`)}
                title=""
                placeholder="Advantage"
                tip={errors?.advantages?.[index]?.advantage?.message || "Allrighty"}
                id={`field-advantages-${index+1}`}
              />
            </div>
            <div className={style.removeContainer}>
              <ButtonIcon
                maxWidth="16px"
                picURL={removeIcon}
                onClick={() => remove(index)}
                id={`button-remove-${index+1}`}
              />
            </div>
          </li>
        ))}
      </ul>
      <div className={style.appendContatiner}>
        <Button
          type="button"
          text="+"
          onClick={() => append({advantage: ""})}
          id="button-add"
        />
      </div>
    </>
  )
}

export default Advantages;