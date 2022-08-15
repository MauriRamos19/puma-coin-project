const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const requestPayment = async (req, res) => {

    try {

        const { amount } = req.body;

        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: "price_1LWnaKJhtZE9NlSGW8Xl1SLJ",
                    quantity: amount,
                },
            ],
            mode: "payment",
            success_url: "http://localhost:3000/trade/{CHECKOUT_SESSION_ID}",
            cancel_url: "http://localhost:300/trade/{CHECKOUT_SESSION_ID}",
        });

        res.status(200).json({
            ok: true,
            request: session,
        })

    } catch (error) {

        console.log("something went wrong during the create of stripe session: ", error);

        res.status(200).json({
            ok: false,
            request: null,
        })

    }
}

const customeRequestPayment = async (req, res) => {

    try {

        const { amount } = req.body;

        const paymentIntent = await stripe.paymentIntents.create({
            amount: 10000,
            currency: 'USD',
            // automatic_payment_methods: { enabled: true },
            payment_method_types: ["card"]
        });
        console.log(paymentIntent);
        res.status(200).json({
            ok: true,
            client_secret: paymentIntent.client_secret
        })

    } catch (error) {

        console.log("something went wrong during the create of stripe session: ", error);

        res.status(200).json({
            ok: false,
            request: null,
        })

    }
}

const requestPaymentInfo = async (req, res) => {

    try {

        const { id } = req.params;

        console.log(id);

        const sessionInfo = await stripe.checkout.sessions.retrieve(id);
        const sessionLineItems = await stripe.checkout.sessions.listLineItems(id);

        const lineItem = sessionLineItems?.data?.[0];

        const data = {
            payment_status: sessionInfo.payment_status,
            status: sessionInfo.status,
            id: sessionInfo.id,
            pumaCoinAmount: lineItem.quantity
        }

        res.status(200).json({
            ok: true,
            request: data,
        })

    } catch (error) {

        console.log("something went wrong during the fetch info of stripe session: ", error);

        res.status(200).json({
            ok: false,
            request: null,
        })
    }
}

module.exports = {
    requestPayment,
    requestPaymentInfo,
    customeRequestPayment
}