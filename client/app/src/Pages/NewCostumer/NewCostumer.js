import React from 'react'
import cargando from '../../Assets/images/cargando.png'
import {  ConectWallet } from '../../Layouts/Transactions/conectWallet';
import "./NewCostumer.css";

const NewCostumer = (props) => {
    return (
        <div>
			{ConectWallet()}
		</div>
    )
}

export default NewCostumer