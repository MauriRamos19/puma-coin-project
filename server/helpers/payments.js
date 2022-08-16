const UserTransactions = require('../models/transactions');

const getAllUserPayments = async function (userID) {

    const userTransactionsInfo = await UserTransactions.findOne({ user: userID });

    if (
        !userTransactionsInfo
        || !Array.isArray(userTransactionsInfo?.transactions)
    ) return [];

    const transactionsParsed = userTransactionsInfo.transactions.map(
        transaction => JSON.parse(transaction));

    return transactionsParsed;
}

const savePaymentInfoToDB = async function (userID, paymentInfo) {

    const useTransactionsParsed = await getAllUserPayments(userID);

    if (useTransactionsParsed.length > 0) {

        console.log('I will update a transaction register')

        if (
            !Array.isArray(useTransactionsParsed)
            || useTransactionsParsed.find(
                transaction => transaction.id == paymentInfo.id)
        ) return;

        useTransactionsParsed.push(paymentInfo);
        const newTransactionsArray = useTransactionsParsed.map(transaction => JSON.stringify(transaction))

        await UserTransactions.findOneAndUpdate(
            { user: userID },
            { transactions: newTransactionsArray },
            { new: true }
        );

    } else {
        console.log('I will create a new transaction register')
        const newtransactions = new UserTransactions({
            user: userID,
            transactions: [JSON.stringify(paymentInfo)]
        });

        await newtransactions.save();
    }
}

const updateClaimedPayment = async function (userID, paymentsIDs) {

    if (!Array.isArray(paymentsIDs))
        throw new Error("paymentsIDs should be an array");

    const payments = await getAllUserPayments(userID);

    payments.forEach((payment) => {
        if (paymentsIDs.includes(payment.id)) {
            payment.claimed = true;
        }
    });

    const newtransactionsArray = payments.map((payment) => JSON.stringify(payment));

    await UserTransactions.findOneAndUpdate(
        { user: userID },
        { transactions: newtransactionsArray },
        { new: false }
    );

    return true;
}

module.exports = {
    savePaymentInfoToDB,
    getAllUserPayments,
    updateClaimedPayment
}