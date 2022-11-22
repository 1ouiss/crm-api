const Invoice = require('../models/invoice.model');
const Customer = require('../models/customer.model');

const InvoiceController = {
    getAllInvoices: async (req, res) => {
        Invoice.find({}, (err, invoices) => {
            if(err) {
                res.status(500).send(err)
            } else {
                res.status(200).send(invoices)
            }
        })
    },
    getOneInvoice: async (req, res) => {
        Invoice.findById(req.params.id, (err, invoice) => {
            if(err) {
                res.status(500).send(err)
            } else {
                res.status(200).send(invoice)
            }
        })
    },
    createInvoice: async (req, res) => {
        // const customer = await Customer.findById(req.body.customer)
        // if(!customer) {
        //     res.status(404).send('Customer not found')
        // }

        // const invoice = new Invoice({
        //     status: req.body.status,
        //     amount: req.body.amount
        // })
        // invoice.customer = customer

        
        // invoice.save().then(data => {
        //     res.send(data)
        // }).catch(err => {
        //     res.status(500).send(err)
        // })
        // console.log(invoice);
        // customer.invoices.push(invoice)
        // await customer.save()

        const data = req.body
        
        const customer = await Customer.findById(data.customer)

        if(!customer) {
            res.status(404).send('Customer not found')
        }

        data.customer = customer
        const invoice = await Invoice.create(data)
        await invoice.save()
        
        res.send(invoice)

        customer.invoices.push(invoice)
        await customer.save()


    },
    updateInvoice: async (req, res) => {
        Invoice.findByIdAndUpdate(req.params.id, {
            status: req.body.status,
            date: req.body.date,
            amount: req.body.amount,
            customer: req.body.customer
        }, {new: true}, (err, invoice) => {
            if(err) {
                res.status(500).send(err)
            } else {
                res.status(200).send(invoice)
            }
        })
    },
    deleteInvoice: async (req, res) => {
        Invoice.findByIdAndDelete(req.params.id, (err, invoice) => {
            if(err) {
                res.status(500).send(err)
            } else {
                Invoice.find({}, (err, invoices) => {
                    if(err) {
                        res.status(500).send
                    } else {
                        res.status(200).send(invoices)
                    }
                })
            }
        })
    },
    getInvoicesByCustomer: async (req, res) => {
        Invoice.find({customer: req.params.id}, (err, invoices) => {
            if(err) {
                res.status(500).send
            } else {
                res.status(200).send(invoices)
            }
        })
    }
}

module.exports = InvoiceController