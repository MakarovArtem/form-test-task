import React, { FC, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Button from "../../components/UI/button/Button";
import Input from "../UI/input/Input";
import ButtonIcon from "../UI/buttonIcon/ButtonIcon";
import style from "./AdvantageList.module.css";

interface AdvantageListProps {
  count?: number;
}

const AdvantageList: FC<AdvantageListProps> = ({count = 3}) => {

  const {
    control,
  } = useForm({ mode: "onBlur" });

  const [advantagesCount, setAdvantagesCount] = useState<number[]>(() => {
    let arrCount = [];
    for(let i = 1; i < count + 1; i++){
      arrCount.push(i);
    }
    return arrCount;
  });

  return (
    <>
      {advantagesCount?.map((count) =>
        <div className={style.advantageContainer}>
          <div className={style.inputContainer}>
          <Controller
            name={`field-advantages-${count}`}
            control={control}
            defaultValue="Advantage"
            rules={{
              required: true,
            }}
            render={({
              field,
              fieldState: { error },
            }) => (
              <Input
                {...field}
                title=' '
                type='text' 
                placeholder={`Mega Advantage${count}`}
                tip={error?.message || "Allrighty"}
                id={`field-advantages-${count}`}
              />
            )}
          />
          </div>
          <div className={style.removeAdvantageContainer}>
            <ButtonIcon
              picURL="icons/delete-icon.svg"
              id={`button-remove-${count}`}
            />
          </div>
        </div>
      )}
      <div className={style.buttonAddContainer}>
        <Button text="+" theme={"white"} id="button-add"/>
      </div>
    </>
  )
}

export default AdvantageList;