import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './FinishRegister.css'

const FinishRegister = (props) => {

    let { userID } = useParams();

    return (
        <div className="FinishRegister">
            <div className="FinishRegister__header">
                <h1>Completa tu perfil</h1>
                <p>Ayudanos a proteger tu cuenta completando tu perfil.<br />
                    Primero selecciona el tipo de cuenta que deseas tener</p>
            </div>
            <div className="FinishRegister__wrapper">
                <Link
                    to={"/finish-register-persona/" + userID}
                    className="FinishRegister__card"
                >
                    <FontAwesomeIcon className="icon" icon="fa-solid fa-user" />
                    <h3>Natural</h3>
                    <p>Para personas individuales</p>
                </Link>
                <Link
                    to={"/finish-register-company/" + userID}
                    className="FinishRegister__card"
                >
                    <FontAwesomeIcon className="icon" icon="fa-solid fa-landmark" />
                    <h3>Empresa</h3>
                    <p>Para negocios grandes o pequeños</p>
                </Link>
            </div>
        </div>
    )
}

export default FinishRegister;