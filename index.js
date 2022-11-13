const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const customersRoutes = require('./routes/customer.routes')
require('dotenv').config()
require('./config/db')
const app = express()
const port = process.env.PORT || 8000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', customersRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})