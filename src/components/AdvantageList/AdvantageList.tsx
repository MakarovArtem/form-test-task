import React, { FC, useState, useEffect } from "react";
import Input from "../input/Input";
import ButtonIcon from "../buttonIcon/ButtonIcon";
import style from "./AdvantageList.module.css";

interface AdvantageListProps {
  count?: number;
}

const AdvantageList: FC<AdvantageListProps> = ({count = 3}) => {

  const [advantagesCount, setAdvantagesCount] = useState<number[]>();

  useEffect(() => {
    let arrCount = [];
    for(let i = 1; i < count + 1; i++){
      arrCount.push(i);
    }
    setAdvantagesCount(arrCount);
  }, [count])

  return (
    <>
      {advantagesCount?.map((count) =>
          <div className={style.advantageContainer}>
            <div className={style.inputContainer}>
              <Input title="" type="text" id={`field-advantages-${count}`} />
            </div>
            <div className={style.removeAdvantageContainer}>
              <ButtonIcon
                picURL="delete-icon.svg"
                alt="delete-button-icon"
                id={`button-remove-${count}`}
              />
            </div>
          </div>
      )}
    </>
  )
}

export default AdvantageList;