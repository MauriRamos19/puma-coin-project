import React from 'react'
import {PaymentElement} from '@stripe/react-stripe-js'

import './CheckoutForm.css'

const CheckoutForm = () => {
    return (
        <form>
            <PaymentElement />
            <button type="button">Submit</button>
        </form>
    )
}

export default CheckoutForm