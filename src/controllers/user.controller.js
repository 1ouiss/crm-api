const UserModel = require('../models/user.model');
const Customer = require('../models/customer.model');
const bcrypt = require('bcrypt');

const UserController = {
    getAllUsers: async (req, res) => {
        const usersList = await UserModel.find().populate('customers');
        res.send(usersList);
    },
    getOneUser: async (req, res) => {
        const user = await UserModel.findById(req.params.id);

        if (!user) {
            res.status(404).send('User not found');
        } else {
            res.status(201).send(user);
        }
    },
    createUser: async (req, res) => {
        const user = new UserModel({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
        });

        // user.password = await bcrypt.hash(user.password, 10);

        try {
            await user.save();
            res.status(201).send(user);
        } catch (error) {
            res.status(400).send({error : error.message});
        }
    },
    updateUser: async (req, res) => {
        try {
            const user = await UserModel.findByIdAndUpdate(req.params.id, {
                username: req.body.username,
                password: req.body.password,
                email: req.body.email
            }, {new: true});
            
            res.status(201).send(user);
        } catch (error) {
            res.sttus(400).send({error : error.message});
        }
    },
    deleteUser: async (req, res) => {

        const user = await UserModel.findByIdAndDelete(req.params.id);

        if (!user) {
            res.status(404).json({message: 'User not found'});
        }
        res.send(user);
    },
    getAllCustomers: async (req, res) => {
        const customersList = await Customer.find({user: req.params.id})
        res.send(customersList)
    }
}

module.exports = UserController;