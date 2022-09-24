const { savePaymentInfoToDB, getAllUserPayments, updateClaimedPayment } = require('../helpers/payments');

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
            success_url: "http://pumacoin-finance.web.app/trade/{CHECKOUT_SESSION_ID}",
            cancel_url: "http://pumacoin-finance.web.app/trade/{CHECKOUT_SESSION_ID}",
        });

        res.status(200).json({
            ok: true,
            request: session,
        })

    } catch (error) {

        console.log("something went wrong during the create of stripe session: ", error);

        res.status(500).json({
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

        const user = req.user;
        const { id: sessionID } = req.params;

        if (!sessionID)
            throw new Error("Session ID not provided");

        const sessionInfo = await stripe.checkout.sessions.retrieve(sessionID);
        const sessionLineItems = await stripe.checkout.sessions.listLineItems(sessionID);

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

        if (sessionInfo.payment_status == "paid" && sessionInfo.status == "complete") {
            await savePaymentInfoToDB(user.id, {
                id: sessionInfo.id,
                session: sessionInfo,
                lineItems: lineItem,
                claimed: false
            })
        }


    } catch (error) {

        console.log("something went wrong during the requestPaymentInfo: ", error);

        res.status(500).json({
            ok: false,
            request: null,
            error
        })
    }
}

const getAllPayments = async (req, res) => {

    try {

        const user = req.user;
        const payments = await getAllUserPayments(user.id);

        res.status(200).json({
            ok: true,
            payments: payments,
        })

    } catch (error) {

        console.log("something went wrong during the getAllUserPayments: ", error);

        res.status(500).json({
            ok: false,
            request: null,
        })
    }

}

const getUnclaimedTokens = async (req, res) => {

    try {

        const user = req.user;
        const payments = await getAllUserPayments(user.id);

        const unclaimedPayments = payments.filter(payment => !payment.claimed)
        console.log(unclaimedPayments)
        res.status(200).json({
            ok: true,
            unClaimedTokens: unclaimedPayments,
        })

    } catch (error) {

        console.log("something went wrong during the getUnclaimedTokens: ", error);

        res.status(500).json({
            ok: false,
            unClaimedTokens: null,
        })
    }

}

const claimPayments = function (req, res) {

    try {

        const user = req.user;
        const { paymentsIDS } = req.body;

        if (!Array.isArray(paymentsIDS))
            throw new Error("Payment IDs should be an array");

        const isUpdated = updateClaimedPayment(user.id, paymentsIDS);
        console.log("is updated", isUpdated)

        res.status(200).json({
            ok: true,
            isUpdated: isUpdated
        })

    } catch (error) {

        console.log("something went wrong during claimPayments: ", error);

        res.status(500).json({
            ok: false,
            isUpdated: false,
            error: error
        })
    }

}

const webhooksHandler = function (request, response) {

    const endpointSecret = process.env.STRIPE_WEBHOOK_ENDPOINT_SECRET;

    const sig = request.headers['stripe-signature'];

    let event;

    try {
        event = stripe.webhooks.constructEvent(request.rawBody, sig, endpointSecret);
    } catch (err) {
        console.log(err.message)
        response.status(400).send(`Webhook Error: ${err.message}`);
        return;
    }

    // Handle the event
    switch (event.type) {

        case 'charge.captured':
            console.log("charge.captured event handled");
            break;

        case 'charge.succeeded':
            console.log("charge.succeeded event handled");
            break;

        case 'payment_intent.succeeded':
            console.log("payment_intent.succeeded event handled");
            break;

        default:
            console.log(`Unhandled event type ${event.type}`);
    }

    // Return a 200 response to acknowledge receipt of the event
    response.send();
}

module.exports = {
    requestPayment,
    requestPaymentInfo,
    customeRequestPayment,
    getAllPayments,
    webhooksHandler,
    claimPayments,
    getUnclaimedTokens
}