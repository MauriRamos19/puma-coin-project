import React, { useEffect, useState } from 'react'
import { withCookies } from 'react-cookie'
import { useParams } from 'react-router-dom'
import { useBuyPumaCoin } from '../../Hooks/Solana'
import { requestPayment, requestPaymentInfo } from '../../services/payments'
import Button from '../Button/Button'

import './BuyPumaButton.css'


const BuyPumaButton = ({ children, amountPuma, cookies }) => {

    const buyPumaCoin = useBuyPumaCoin();
    const [token, setToken] = useState(cookies.get("x_access_token"));
    const { id } = useParams();

    useEffect(() => {
        // requestPaymentInfo(token, id)
        //     .then(({ payment, pumaCoinAmount }) => payment && buyPumaCoin(pumaCoinAmount))
        //     .then(result => { console.log(result); })
        //     .catch(error => { console.error("something went wrong: ", error); })
    }, [id])


    const onClickHandler = (evt) => {

        const pumaCoinAmount = Number(amountPuma);
        // requestPayment(token, pumaCoinAmount);
    }

    return (
        <Button
            className="BuyPumaButton"
            onClick={onClickHandler}
        >
            {children}
        </Button>
    )
}

export default withCookies(BuyPumaButton)

/*
•create the service on the frontend that hits the endpoint
that will create the stripe session and pass as an argument the quantity of requested
pumaCoins

•create the price and the product on the stripe database with the stripe
endpoints
*/