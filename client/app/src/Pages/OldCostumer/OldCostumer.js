import React from 'react'
import cargando from '../../Assets/images/cargando.png'
import {  ConectWallet } from '../../Layouts/Transactions/conectWallet';
import "./OldCostumer.css";
import { getInfoAccount } from '../../services/settings';

const OldCostumer = (props) => {

    const nombre = getInfoAccount.name
    return (
        <div>
            <div>
                <h2>Bienvenido {nombre}</h2>
            </div>
            {ConectWallet()}
        </div>
    )
}

export default OldCostumer