import React from 'react'
import "./TradeMenu.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ConectWallet } from '../../Layouts/Transactions/conectWallet';
import { Link, Outlet } from 'react-router-dom'

const TradeMenu = (props) => {
    return (
        <div className="Trade_Page">
            <div className='Trade_bar'>
                <div className='Trade_column'>
                    <h1>Bienvenido a la pestaña de Cambio</h1>
                    <h3>Elija si es un nuevo cliente o si ya dispone de nuestra criptomoneda.</h3>
                </div>
                <div className="Trade__wrapper">
                    <Link to={'/trade/new-costumer/'} className="Trade__card">
                        <FontAwesomeIcon className="icon" icon="fa-solid fa-cookie" />
                        <h3>Cliente Nuevo</h3>
                        <p>No dispongo de su criptomoneda.</p>
                    </Link>
                    <Link to={'/trade/old-costumer/'} className="Trade__card">
                        <FontAwesomeIcon className="icon" icon="fa-solid fa-cookie-bite" />
                        <h3>Cliente Recurrente</h3>
                        <p>Ya dispongo de su criptomoneda</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TradeMenu