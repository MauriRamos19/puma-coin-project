const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const createSession = async (req, res) => {

    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    currency: "HNL",
                    unit_amount: (30.00*100),
                    product_data: {
                        name: "PumaCoin",
                        description: "Crypto currency"
                    }
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `http://localhost:3000/`,
        cancel_url: `http://localhost:3000/trade`,
    });

    console.log(session)

    res.redirect(303, session.url);
}

module.exports = {
    createSession
}