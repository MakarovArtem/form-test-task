import React, { FC, useState } from "react";
import Button from "../../components/UI/button/Button";
import Input from "../UI/input/Input";
import ButtonIcon from "../UI/buttonIcon/ButtonIcon";
import style from "./AdvantageList.module.css";

interface AdvantageListProps {
  count?: number;
  register?: any;
  groupName?: string;
}

const AdvantageList: FC<AdvantageListProps> = ({count = 3, register, groupName}) => {

  const [advantagesCount, setAdvantagesCount] = useState<number[]>(() => {
    let arrCount = [];
    for(let i = 1; i < count + 1; i++){
      arrCount.push(i);
    }
    return arrCount;
  });

  const removeAdvantage = (count: number) => {
    setAdvantagesCount((prevCount) =>
      prevCount.filter((elem) => elem !== count)
    );
  };

  const addAdvantage = () => {
    setAdvantagesCount((prevCount) => {
      let newDigit = prevCount[prevCount.length - 1] + 1;
      return [...prevCount, newDigit];
    })
  };

  return (
    <fieldset>
      {advantagesCount?.map((count) =>
        <div className={style.advantageContainer} key={count}>
          <div className={style.inputContainer}>
            <Input
              register={register}
              groupName={groupName + "-" + count}
              title=' '
              type='text' 
              placeholder={`Mega Advantage №${count}`}
              id={`field-advantages-${count}`}
            />
          </div>
          <div className={style.removeAdvantageContainer}>
            <ButtonIcon
              picURL="icons/delete-icon.svg"
              id={`button-remove-${count}`}
              key={count}
              onClick={() => removeAdvantage(count)}
            />
          </div>
        </div>
      )}
      <div className={style.buttonAddContainer}>
        <Button 
          text="+" 
          theme={"white"} 
          id="button-add" 
          onClick={() => addAdvantage()}
        />
      </div>
    </fieldset>
  )
}

          {/* <Controller
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
          /> */}

export default AdvantageList;