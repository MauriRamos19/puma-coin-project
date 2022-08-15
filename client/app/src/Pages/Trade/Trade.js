import React, { useReducer } from 'react'
import AddPumaTokenBtn from '../../Components/AddPumaTokenBtn/AddPumaTokenBtn'
import BuyPumaButton from '../../Components/BuyPumaButton/BuyPumaButton'
import Card from '../../Components/Card/Card'
import CheckoutForm from '../../Components/CheckoutForm/CheckoutForm'
import CurrencyConversor from '../../Components/CurrencyConversor/CurrencyConversor'
import WrapperDirection from '../../Components/WrapperDirection/WrapperDirection'
import currencyConversorReducer from '../../Reducers/currencyConversor'
import './Trade.css'

const conversions = [
    { id: "abcd-1234-pumacoin", fromName: "Puma", toName: "HNL", conversion: 1.5 },
]

const MIN_FROM_VALUE = 10;

const Trade = () => {

    const [currencies, currenciesDispatch] = useReducer(currencyConversorReducer, {
        fromAmount: MIN_FROM_VALUE,
        toAmount: MIN_FROM_VALUE * conversions[0]?.conversion,
        conversion: conversions[0]?.conversion,
        minFromValue: MIN_FROM_VALUE
    })

    const options = {
        // passing the client secret obtained in step 2
        clientSecret: process.env.STRIPE_SECRET_KEY,
        // Fully customizable with appearance API.
        appearance: {/*...*/ },
    };

    return (
        <div className="Trade">
            <div className="Trade__container">
                <Card className="curencyConversor__wrapper">
                    <h1>PumaCoin</h1>
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
                        >
                            Comprar Ahora
                        </BuyPumaButton>
                        <AddPumaTokenBtn>Agregar PumaCoin token a mi wallet</AddPumaTokenBtn>
                    </WrapperDirection>
                </Card>

                {/* <CheckoutForm /> */}

            </div>
        </div>
    )
}

export default Trade