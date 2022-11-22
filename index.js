const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const customersRoutes = require('./src/routes/customer.routes')
const invoicesRoutes = require('./src/routes/invoice.routes')
const usersRoutes = require('./src/routes/user.routes')
require('dotenv').config()
require('./config/db')
const app = express()
const port = process.env.PORT || 8000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())


app.use('/api', customersRoutes)
app.use('/api', invoicesRoutes)
app.use('/api', usersRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})