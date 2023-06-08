import React, { FC, useEffect, useState } from "react";
import style from "./ProgressLine.module.css";

interface ProgressLineProps {
  step?: string;
}

const ProgressLine: FC<ProgressLineProps> = ({step}) => {

  const [dotOne, setDotOne] = useState('');
  const [dotTwo, setDotTwo] = useState('');
  const [dotThree, setDotThree] = useState('');
  const [digitOne, setDigitOne] = useState('');
  const [digitTwo, setDigitTwo] = useState('');
  const [digitThree, setDigitThree] = useState('');
  const [lineStyle, setLineStyle] = useState('');

  const combineStyles = (switcher: string | undefined): void => {
    let dotOne: string;
    let dotTwo: string;
    let dotThree: string;
    let digitOne: string;
    let digitTwo: string;
    let digitThree: string;
    let line: string;

    switch(switcher) {
      case "one":
        dotOne = style.dot + " " + style.dotActive;
        dotTwo = style.dot;
        dotThree = style.dot;
        digitOne = style.dotDigit + " " + style.dotDigitActive;
        digitTwo = style.dotDigit;
        digitThree = style.dotDigit;
        line = style.line;
        break;
      case "two":
        dotOne = style.dot + " " + style.dotDone;
        dotTwo = style.dot + " " + style.dotActive;
        dotThree = style.dot;
        digitOne = style.dotDigit + " " + style.dotDigitActive;
        digitTwo = style.dotDigit + " " + style.dotDigitActive;
        digitThree = style.dotDigit;
        line = style.line+ " " + style.lineHalf;
        break;
      case "three":
        dotOne = style.dot + " " + style.dotDone;
        dotTwo = style.dot + " " + style.dotDone;
        dotThree = style.dot + " " + style.dotActive;
        digitOne = style.dotDigit + " " + style.dotDigitActive;
        digitTwo = style.dotDigit + " " + style.dotDigitActive;
        digitThree = style.dotDigit + " " + style.dotDigitActive;
        line = style.line+ " " + style.lineFull;
        break;
      default:
        dotOne = style.dot;
        dotTwo = style.dot;
        dotThree = style.dot;
        digitOne = style.dotDigit;
        digitTwo = style.dotDigit;
        digitThree = style.dotDigit;
        line = style.line;
    }
    setDotOne(dotOne);
    setDotTwo(dotTwo);
    setDotThree(dotThree);
    setDigitOne(digitOne);
    setDigitTwo(digitTwo);
    setDigitThree(digitThree);
    setLineStyle(line);
  }

  useEffect(() => {
    combineStyles(step);
  },[step])

  return (
    <div className={style.lineContainer}>
      <div className={lineStyle}>
        <div className={style.checkpoint}>
          <div className={dotOne}>
            <p className={digitOne}>1</p>
          </div>
        </div>
        <div className={style.checkpoint}>
          <div className={dotTwo}>
            <p className={digitTwo}>2</p>
          </div>
        </div>
        <div className={style.checkpoint}>
          <div className={dotThree}>
            <p className={digitThree}>3</p>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default ProgressLine;