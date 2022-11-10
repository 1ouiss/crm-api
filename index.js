const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 8000

app.use(bodyParser.json())

mongoose.connect(`mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env.MONGO_ADRESSE}:${process.env.MONGO_PORT}`,{
    useNewUrlParser: true
})

// const Cat = mongoose.model('Cat', {name: String});
// const kitty = new Cat({ name: 'theo' });
// kitty.save().then(() => console.log('meow'));

const Customer = mongoose.model('Customer', {firstName: String, lastName: String});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// get all customers
// get a single customer
// create a customer
// update a customer
// delete a customer

app.get('/customers', (req, res) => {
    Customer.find({}, (err, customers) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(customers)
        }
    })
})

app.get('/customers/:id', (req, res) => {
    Customer.findById(req.params.id, (err, customer) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(customer)
        }
    })

})

app.post('/customers', (req, res) => {
    const customer = new Customer({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })
    customer.save().then(data => {
        res.status(200).send(data)
    }).catch(err => {
        res.status(500).send(err)
    })
})

app.put('/customers/:id', (req, res) => {
    res.send('Update a customer')
})

app.delete('/customers/:id', (req, res) => {
    res.send('Delete a customer')
})

