const Customer = require('../models/customer.model');
const User = require('../models/user.model');

const CustomerController = {
    // getAllCustomers: (req, res) => {
    //     Customer.find({}, (err, customers) => {
    //         if(err) {
    //             res.status(500).send(err)
    //         } else {
    //             res.status(200).send(customers)
    //         }
    //     }).populate('invoices')
    // },
    getAllCustomers: async (req, res) => {
        const customersList = await Customer.find().populate('invoices')
        res.send(customersList)
    },
    getOneCustomer: (req, res) => {
        Customer.findById(req.params.id, (err, customer) => {
            if(err) {
                res.status(500).send(err)
            } else {
                res.status(200).send(customer)
            }
        })
    },
    createCustomer: async (req, res) => {
        const customer = new Customer({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            user: req.body.user
        })


        const user = await User.findById(req.body.user)
        if(!user) {
            res.status(404).send('User not found')
        }

        user.customers.push(customer)
        await user.save()
        await customer.save()

        res.send(customer)
    },
    updateCustomer: (req, res) => {
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
    },
    deleteCustomer: (req, res) => {
        Customer.findByIdAndDelete(req.params.id, (err, customer) => {
            if(err) {
                res.status(500).send(err)
            } else {
                const customers = Customer.find({}, (err, customers) => {
                    if(err) {
                        res.status(500).send(err)
                    } else {
                        res.status(200).send(customers)
                    }
                })
            }
        })
    }
}

module.exports = CustomerController