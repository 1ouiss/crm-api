const router = require('express').Router();
const UserController = require('../controllers/user.controller');

router.get('/users', UserController.getAllUsers);
router.get('/users/:id', UserController.getOneUser);
router.post('/users', UserController.createUser);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);
router.get('/users/customers/:id', UserController.getAllCustomers);

module.exports = router;