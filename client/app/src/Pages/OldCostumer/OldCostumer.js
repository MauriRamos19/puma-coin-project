import React, { useEffect, useState } from 'react';
import {  ConectWallet } from '../../Layouts/Transactions/conectWallet';
import "./OldCostumer.css";
import { withCookies } from "react-cookie";
import { getUser } from '../../services/user';

const OldCostumer = ({cookies}) => {
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
                <h2>Bienvenido {name}, es bueno verte de vuelta.</h2>
                <h3>Verifica que todo es correcto, proximo viaje hacia ¡LA LUNA!</h3>
            </div>
            {ConectWallet()}
        </div>
    )
}

export default withCookies(OldCostumer)