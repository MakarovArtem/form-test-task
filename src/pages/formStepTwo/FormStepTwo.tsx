import React, { FC } from "react";
import style from "./FormStepTwo.module.css";
import ProgressLine from "../../components/progressLine/ProgressLine";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import ButtonIcon from "../../components/buttonIcon/ButtonIcon";
import Checkbox from "../../components/checkbox/Checkbox";
import Radio from "../../components/radio/Radio";

interface FormStepTwoProps {}

const FormStepTwo: FC<FormStepTwoProps> = () => {
  return (
    <article className={style.main}>
      <div className={style.mainContainer}>
        <ProgressLine step="two" />
        <form className={style.form} action="post">
          <div className={style.inputsContainer}>
            <div className={style.advantageContainer}>
              <Input title="Advantages" type="text" id="field-advantages-1" />
              <div className={style.removeAdvantageContainer}>
                <ButtonIcon picURL="delete-icon.svg" alt="delete-button-icon" id="button-remove-1" />
              </div>
            </div>
            <div className={style.advantageContainer}>
              <Input title="" type="text" id="field-advantages-2" />
              <div className={style.removeAdvantageContainer}>
                <ButtonIcon picURL="delete-icon.svg" alt="delete-button-icon" id="button-remove-2" />
              </div>
            </div>
            <div className={style.advantageContainer}>
              <Input title="" type="text" id="field-advantages-3" />
              <div className={style.removeAdvantageContainer}>
                <ButtonIcon picURL="delete-icon.svg" alt="delete-button-icon" id="button-remove-3" />
              </div>
            </div>
          </div>
          <div className={style.buttonAddContainer}>
            <Button text="+" themeBlue={false} id="button-add"/>
          </div>
          <div className={style.checkboxContainer}>
            <Checkbox 
              title="Checkbox group" 
              groupName="checkboxGroup" 
              variants={["1", "2", "3"]} 
              optionsId={[
                "field-checkbox-group-option-1",
                "field-checkbox-group-option-2",
                "field-checkbox-group-option-3",
              ]}
              id="checkbox-group"
            />
          </div>
          <div className={style.radioContainer}>
            <Radio 
              title="Radio group" 
              groupName="radioGroup" 
              variants={["1", "2", "3"]} 
              optionsId={[
                "field-radio-group-option-1",
                "field-radio-group-option-2",
                "field-radio-group-option-3",
              ]}
              id="radio-group"
            />
          </div>
          <div className={style.backContainer}>
            <Button text="Назад" themeBlue={false} id="button-back" />
          </div>
          <div className={style.nextContainer}>
            <Button text="Далее" themeBlue={true} id="button-next" />
          </div>
        </form>
      </div>
    </article>
  )
}

export default FormStepTwo;