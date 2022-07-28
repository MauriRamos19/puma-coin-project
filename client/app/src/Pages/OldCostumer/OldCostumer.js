import React from 'react'
import cargando from '../../Assets/images/cargando.png'
import {  ConectWallet } from '../../Layouts/Transactions/conectWallet';
import "./OldCostumer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const OldCostumer = (props) => {

    const nombre = ""
    return (
        <div>
            <div>
                <h2><FontAwesomeIcon icon="fa-brands fa-bitcoin-sign" />ienvenido {nombre}</h2>
            </div>
            {ConectWallet()}
        </div>
    )
}

export default OldCostumer