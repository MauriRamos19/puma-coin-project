import React from 'react'
import cargando from '../../Assets/images/cargando.png'
import {  ConectWallet } from '../../Layouts/Transactions/conectWallet';
import "./OldCostumer.css";
import { getInfoAccount } from '../../services/user';

const OldCostumer = (props) => {

    return (
        <div>
            <div>
                <h2>Bienvenido</h2>
            </div>
            {ConectWallet()}
        </div>
    )
}

export default OldCostumer