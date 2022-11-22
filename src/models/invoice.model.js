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
    enum: {
        values: ['send', 'paid', 'cancel'],
    }
});


module.exports = Invoice;
