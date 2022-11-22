const mongoose = require('mongoose');

const Customer = mongoose.model('Customer', {
    firstName: String,
    lastName: String,
    invoices: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Invoice'
    }],
    user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
});

module.exports = Customer;