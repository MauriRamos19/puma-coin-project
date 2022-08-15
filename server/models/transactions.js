const { Schema, model } = require('mongoose');


const userTransactionsShema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    transactions: [{
        type: String
    }]
});

module.exports = model('UserTransactions', userTransactionsShema);
