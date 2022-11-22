const InvoiceController = require('../controllers/invoice.controller');
const router = require('express').Router();

router.get('/invoices', InvoiceController.getAllInvoices);
router.get('/invoices/:id', InvoiceController.getOneInvoice);
router.post('/invoices', InvoiceController.createInvoice);
router.put('/invoices/:id', InvoiceController.updateInvoice);
router.delete('/invoices/:id', InvoiceController.deleteInvoice);
router.get('/invoices/customers/:id', InvoiceController.getInvoicesByCustomer);

module.exports = router;