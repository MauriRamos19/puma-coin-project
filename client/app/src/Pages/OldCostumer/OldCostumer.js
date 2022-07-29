import React, { useEffect, useState } from 'react';
import {  ConectWallet } from '../../Layouts/Transactions/conectWallet';
import "./OldCostumer.css";
import { withCookies } from "react-cookie";
import { getUser } from '../../services/user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import model2 from '../../Assets/images/model (2).png'

const OldCostumer = ({cookies}) => {
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
            <h1 className='OldCostumer__h1'>Bienvenido a Cliente Recurrente  <img className='OldCostumer__img'  src={model2} /></h1>
            <h3 className='OldCostumer__h3'>Para poder continuar debes acceder a tu cuenta, inicia sesión.</h3>
        </div>)
    }else{
        return (
            <div>
                <div>
                    <h2 className='OldCostumer__h1'>Bienvenido {name}, es bueno verte de vuelta. </h2>
                    <h3 className='OldCostumer__h3'>Verifica que todo es correcto, proximo viaje hacia ¡LA LUNA! <FontAwesomeIcon className='rebote' icon="fa-solid fa-rocket" /></h3>
                </div>
                {ConectWallet()}
            </div>
        )
    }
}

export default withCookies(OldCostumer)