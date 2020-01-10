const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: [true, 'Name is mandatory'] },
    email: { type: String, unique: true, required: [true, 'Email is mandatory'] },
    password: { type: String, required: [true, 'Password is mandatory'] },
});

userSchema.plugin( uniqueValidator, { message: 'This {PATH} is already taken'} )

module.exports = mongoose.model('users', userSchema);