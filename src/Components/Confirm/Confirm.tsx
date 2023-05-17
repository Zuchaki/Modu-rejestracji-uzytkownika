import React, { useState } from "react";
import style from './Confirm.module.scss'
import Input from "../Form/Input/Input";
import { Value } from "../../modules";
import { useSelector } from "react-redux";
import { State } from "../../Redux/Reducers/datas";
import Loading from "../Loading/Loading";

interface Props{
    setStep:React.Dispatch<React.SetStateAction<number>>
}
const Confirm:React.FC<Props> = ({setStep}) => {
    
    {/*The Redux selector takes data and assigns it to the state value.*/}
    const newValue: Value = useSelector((state:{datas:State}) => state.datas.datas);
    const [value, setValue] = useState<Value>({
        email:newValue.email,
        password:newValue.password,
        repPassword:newValue.repPassword,
        nip:newValue.nip,
        phone:newValue.phone,
        position: newValue.position

    });

    {/*boolean state. If its turn to true then run animation*/}
    const [animation, setAnimation] = useState<boolean>(false)

    {/*Submit function after confirm datas*/}
    const submit = (e: React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault();
        setAnimation(true)
    }
    return(
        <>
            <div className={style.main}>
                <form className={style.container} onSubmit={submit}>

                {/*API loading animation*/}
                {animation?<div className={style.animation}><Loading/></div>:<></>}

                    {/*Title*/}
                    <div className={style.title}>Potwierdz dane</div>

                    <Input
                        key={'email'}
                        value={value.email}
                        type={'text'}
                        id={'email'}
                        label={'E-mail'}
                        disabled={true}

                    />
                    <Input
                        key={'nip'}
                        value={value.nip}
                        type={"text"}
                        id={'nip'}
                        label={'NIP'}
                        disabled={true}

                    />
                    <Input
                        key={'phone'}
                        value={value.phone}
                        type={'tel'}
                        id={'phone'}
                        label={'Numer telefonu'}
                        disabled={true}

                    />
                    <Input
                        key={'position'}
                        value={value.position}
                        type={'text'}
                        id={'position'}
                        label={'Stanowisko'}
                        disabled={true}
                    />

                    {/*Buttons*/}
                    <div className={style.buttonContainer}>
                        <button className={style.button} onClick={() => submit}>Potwierdz i zarejestruj</button>
                        <button className={style.buttonBack} onClick={() => setStep(0)}>wróć</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Confirm;