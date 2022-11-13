const customerController = require('../controllers/customer.controller')
const router = require('express').Router()

router.get('/customers', customerController.getAllCustomers)
router.get('/customers/:id', customerController.getOneCustomer)
router.post('/customers', customerController.createCustomer)
router.put('/customers/:id', customerController.updateCustomer)
router.delete('/customers/:id', customerController.deleteCustomer)

module.exports = router