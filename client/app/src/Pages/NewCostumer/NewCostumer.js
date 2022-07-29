import React, { useEffect, useState } from 'react'
import {  ConectWallet } from '../../Layouts/Transactions/conectWallet';
import "./NewCostumer.css";
import { withCookies } from "react-cookie";
import { getUser } from '../../services/user';
import model2 from '../../Assets/images/model (2).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NewCostumer = ({cookies}) => {
    const [name, setName] = useState("")

    useEffect(()=>{
        const token = cookies.get("x_access_token")

        getUser(token).then(respuesta=>{
            setName(respuesta.user.name)
        })
    },[name])

    if (!cookies.get("x_access_token"))
    {
        return (<div>
            <h1 className='NewCostumer__h1'>Bienvenido a Cliente Nuevo  <img className='NewCostumer__img'  src={model2} /></h1>
            <h3 className='NewCostumer__h3'>Para poder continuar debes acceder a tu cuenta, inicia sesión.</h3>
        </div>)
    }else{
        return (
            <div>
                <div>
                    <div>
                        <h2 className='NewCostumer__h1'>Bienvenido ¡{name}! ¿listo para entrar al mundo cripto?</h2>
                        <h3 className='NewCostumer__h3'>Para poder obtener nuestra criptomoneda debes aprobar el contrato.</h3>
                        <p className='NewCostumer__h3'>Esto es para poder crearte una cuenta en tu billetera <FontAwesomeIcon icon="fa-solid fa-wallet" />, y que puedas operar libremente.</p>
                    </div>
                    {ConectWallet()}
                </div>
                    <div>
                        <p className="NewCostumer__tr" id="head_trans"></p>
                        <p className="NewCostumer__tr" id="trans"></p>
                        <p className="NewCostumer__tr" id="sol_bal"></p>
                    </div>
            </div>
        )
    }
}


export default withCookies(NewCostumer)