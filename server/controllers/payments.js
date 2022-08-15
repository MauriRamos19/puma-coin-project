const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const UserTransactions = require('../models/transactions');



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

const requestPaymentInfo = async (req, res) => {

    try {

        const user = req.user;
        const { id } = req.params;

        console.log(id);


        const transactions = await userTransactions.findOne({ user: user.id });
        
    
        const sessionInfo = await stripe.checkout.sessions.retrieve(id);
        const sessionLineItems = await stripe.checkout.sessions.listLineItems(id);
        
        const lineItem = sessionLineItems?.data?.[0];

        const data = {
            payment_status: sessionInfo.payment_status,
            status: sessionInfo.status,
            id: sessionInfo.id,
            pumaCoinAmount: lineItem.quantity
        }
        

        if(transactions){
            transactions.transactions.push(JSON.stringify(sessionInfo));
            await UserTransactions.findOneAndUpdate({user: user.id}, { transactions: transactions.transactions }, { new: true });
        }else{
            const newUserTransactions = new userTransactions({
                user: user.id,
                transactions: [JSON.stringify(sessionInfo)]
            });
            await newUserTransactions.save();
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

const getPaymentsInfo = async (req, res) => {
    
        try {
    
            const user = req.user;
            const { id } = req.params;
    
            const transactions = await UserTransactions.findOne({ user: user.id });
            
            const data = transactions.transactions.filter(transaction => { 
                JSON.parse(transaction).id === id ;
            });

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
    getPaymentsInfo
}