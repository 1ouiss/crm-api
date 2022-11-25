const mongoose = require('mongoose');

const Invoice = mongoose.model('Invoice', {
    status: String,
    amount: Number,
    createdAt: {
        type: Date,
        default: Date.now
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: String,
});


module.exports = Invoice;
