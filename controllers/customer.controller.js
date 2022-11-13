const Customer = require('../models/customer.model');

module.exports.getAllCustomers = (req, res) => {
    Customer.find({}, (err, customers) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(customers)
        }
    })
}

module.exports.getOneCustomer = (req, res) => {
    Customer.findById(req.params.id, (err, customer) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(customer)
        }
    })
}

module.exports.createCustomer = (req, res) => {
    const customer = new Customer({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })
    customer.save().then(data => {
        res.status(200).send(data)
    }).catch(err => {
        res.status(500).send(err)
    })
}

module.exports.updateCustomer = (req, res) => {
    Customer.findByIdAndUpdate(req.params.id, {
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }, {new: true}, (err, customer) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(customer)
        }
    })
}

module.exports.deleteCustomer = (req, res) => {
    Customer.findByIdAndDelete(req.params.id, (err, customer) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(customer)
        }
    })
}