const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');


const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        min: 3
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024,

    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    customers: [{
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    }]
});

UserSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});

module.exports = mongoose.model('User', UserSchema);
