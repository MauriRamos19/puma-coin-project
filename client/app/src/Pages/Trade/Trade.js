import React from 'react'
import "./Trade.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {conectWallet} from '../../Layouts/Transactions/conectWallet';


const Trade = (props) => {
    return (
        <div className="Trade_Page">
            <div className='Trade_bar'>
                <div className='Trade_column'>
                    <h1>Bienvenido a la pestaña de Cambio</h1>
                    <h3>Elija si es un nuevo cliente o si ya dispone de nuestra criptomoneda.</h3>
                </div>
                <div className="Trade__wrapper">
                    <div className="Trade__card">
                        <FontAwesomeIcon className="icon" icon="fa-solid fa-cookie" />
                        <h3>Cliente Nuevo</h3>
                        <p>No dispongo de su criptomoneda.</p>
                    </div>
                    <div className="Trade__card">
                        <FontAwesomeIcon className="icon" icon="fa-solid fa-cookie-bite" />
                        <h3>Cliente Recurrente</h3>
                        <p>Ya dispongo de su criptomoneda</p>
                    </div>
                </div>
                <div>
                    <p>{conectWallet().toString()}</p>
                </div>
            </div>
        </div>
    )
}

export default Trade