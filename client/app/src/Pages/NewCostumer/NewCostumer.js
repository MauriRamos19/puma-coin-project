import React, { useEffect, useState } from 'react'
import {  ConectWallet } from '../../Layouts/Transactions/conectWallet';
import "./NewCostumer.css";
import { withCookies } from "react-cookie";
import { getUser } from '../../services/user';

const NewCostumer = ({cookies}) => {
    const [name, setName] = useState("")

    useEffect(()=>{
        const token = cookies.get("x_access_token")

        getUser(token).then(respuesta=>{
            setName(respuesta.user.name)
        })
    },[name])
    return (
        <div>
            <div>
                <h2>Bienvenido ¡{name}! ¿listo para entrar al mundo cripto?</h2>
                <h3>Para poder obtener nuestra criptomoneda debes aprobar el contrato.</h3>
                <p>Esto es para poder crearte una cuenta en tu billetera, y que puedas operar libremente.</p>
            </div>
            {ConectWallet()}
        </div>
    )
}


export default withCookies(NewCostumer)