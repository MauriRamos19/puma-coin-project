import React, { useState } from 'react'
import { useAddPumaTokenToWallet } from '../../hooks/Solana';
import Button from '../Button/Button';

import pumaImg from '../../Assets/images/puma.png'
import './AddPumaTokenBtn.css'

const getMessage = (error) => {

    const defaultMsg = {
        text: "Ocurrio un error",
        type: "error"
    };

    if (!error || typeof error !== 'object') return defaultMsg;

    let message = defaultMsg;

    if (error?.message?.includes("Provided owner is not allowed")) {
        message = {
            text: "Magnifico! ya tienes PumaCoin en tu wallet, no necesitas agregarlo otra vez",
            type: "success"
        };
    }

    if (error?.message?.includes("owner is null")) {
        message = {
            text: "No pudimos agregar PumaCoin, asegurate de iniciar sesión y tener conectada tu wallet",
            type: "error"
        };
    }

    if (error?.message?.includes("Attempt to debit an account")) {
        message = {
            text: "No pudimos agregar PumaCoin, asegurate que tienes solana disponible en tu wallet",
            type: "error"
        };
    }

    return message;
}

const AddPumaTokenBtn = ({ children }) => {

    const addTokenToWallet = useAddPumaTokenToWallet();
    const [message, setMessage] = useState({
        text: '',
        type: null,
    });

    const onClickHandler = (evt) => {

        setMessage({
            text: "Agregando PumaCoin a tu wallet...",
            type: "loading"
        });

        addTokenToWallet()
            .then(result => {
                setMessage({
                    text: "Felicidades ya tienes PumaCoin en tu wallet!",
                    type: "success"
                });
            })
            .catch(error => {
                console.error("something went wrong: ", error);
                setMessage(getMessage(error));
            })
    }

    return (
        <div className="AddPumaTokenBtn__wrapper">
            <Button
                onClick={onClickHandler}
                className={`AddPumaTokenBtn ${message.type}`}
            >
                <span>{message.text || children}</span>
                <img src={pumaImg} alt="pumaCoin" />
            </Button>
        </div>
    )
}

export default AddPumaTokenBtn