import React, { useEffect, useReducer, useState } from 'react'
import { useParams } from 'react-router-dom'
import AddPumaTokenBtn from '../../Components/AddPumaTokenBtn/AddPumaTokenBtn'
import BuyPumaButton from '../../Components/BuyPumaButton/BuyPumaButton'
import Card from '../../Components/Card/Card'
import ClaimPumasBtn from '../../Components/ClaimPumasBtn/ClaimPumasBtn'
import CurrencyConversor from '../../Components/CurrencyConversor/CurrencyConversor'
import WrapperDirection from '../../Components/WrapperDirection/WrapperDirection'
import currencyConversorReducer from '../../Reducers/currencyConversor'
import './Trade.css'

const conversions = [
    { id: "abcd-1234-pumacoin", fromName: "Puma", toName: "HNL", conversion: 1.5 },
]

const MIN_FROM_VALUE = 10;

const Trade = ({ dispatchModal }) => {

    const { transactionID: paymentID } = useParams();
    const [transactionID, setTransactionID] = useState(paymentID)
    const [currencies, currenciesDispatch] = useReducer(currencyConversorReducer, {
        fromAmount: MIN_FROM_VALUE,
        toAmount: MIN_FROM_VALUE * conversions[0]?.conversion,
        conversion: conversions[0]?.conversion,
        minFromValue: MIN_FROM_VALUE
    });

    useEffect(() => {
        setTransactionID(paymentID)
    }, [paymentID])
    

    return (
        <div className="Trade">
            <div className="Trade__container">
                <Card className="curencyConversor__wrapper">
                    <h1>PumaCoin</h1>
                    {/* <div>{message}</div> */}
                    <CurrencyConversor
                        conversions={conversions}
                        currencies={currencies}
                        currenciesDispatch={currenciesDispatch}
                        className="currencyConversor"
                    />
                    <WrapperDirection
                        direction="vertical"
                        className="buttons__wrapper"
                    >
                        <BuyPumaButton
                            amountPuma={currencies.fromAmount}
                            amountMoney={currencies.toAmount}
                            transactionID={transactionID}
                        >
                            Comprar Ahora
                        </BuyPumaButton>
                        <AddPumaTokenBtn>Agregar PumaCoin token a mi wallet</AddPumaTokenBtn>
                    </WrapperDirection>
                    <ClaimPumasBtn
                        dispatchModal={dispatchModal}
                        transactionID={transactionID} />
                </Card>
            </div>
        </div>
    )
}

export default Trade