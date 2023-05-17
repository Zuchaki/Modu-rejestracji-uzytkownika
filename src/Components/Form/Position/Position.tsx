import React from "react";
import style from './Position.module.scss'

interface Props{
    key:string;
    value:string;
    current:string;
    onChangeHandler:(e: React.ChangeEvent<HTMLInputElement>, type:string) => void;
}
const Position: React.FC<Props> = ({ value, current, onChangeHandler }) => {


    return (
      //If this option is choosen update style
      <div className={current === value ? style.containerTRUE : style.container}>

        {/*Input radio - not display*/}
        <input
          type="radio"
          value={value}
          id={value}
          checked={current === value}
          onChange={(e) => onChangeHandler(e, 'radio')}
          className={style.radio}
        />

        {/*Display value of input*/}
        <label className={style.label} htmlFor={value}>{value}</label>
      </div>
    )
  }
  

export default Position;