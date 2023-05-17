import React, { useEffect, useState } from 'react';
import Register from '../Components/Register/Register';
import Confirm from '../Components/Confirm/Confirm';

const RegisterModule: React.FC = () => {

    //provisional react-rauter [0-register, 1-confirm, 2-API]
    const [step, setStep] = useState<number>(0);

    //What to display
    const [content, setContent] = useState<JSX.Element | null>(null);

    //Awter every change step display new component
    useEffect(() => {
        switch(step) {
            //Register
            case 0:
                setContent(<Register setStep={setStep} />);
                break;

            //Confirm
            case 1:
                setContent(<Confirm setStep={setStep}/>);
                break;

            default:
                setContent(<Register setStep={setStep} />);
                break;
        }
    }, [step]);

    return content;
    };

export default RegisterModule;
