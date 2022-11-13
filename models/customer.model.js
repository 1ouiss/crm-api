const mongoose = require('mongoose');

const Customer = mongoose.model('Customer', {
    firstName: String,
    lastName: String
});

module.exports = Customer;