import React from "react";
import style from './Loading.module.scss'
import {AiOutlineSend} from 'react-icons/ai';
import {TbNetworkOff} from 'react-icons/tb';

const Loading:React.FC = () => {
    
    return(
        <>
        {/*Sending tu serwer animation*/}
        <div className={style.container}>
            <div className={style.flyAnimation}><AiOutlineSend color="white" size={80}/></div>
            <div className={style.message}>Wysyłanie danych na serwer...</div>
        </div>

        {/*Error message*/}
        <div className={style.containerError}>
            <TbNetworkOff color="white" size={80}/>
            <div className={style.message}>Brak połączenia z serwerem. Już pracujemy nad rozwiązaniem problemu, prosimy spróbować później.</div>
        </div>
        </>
    )
}

export default Loading;