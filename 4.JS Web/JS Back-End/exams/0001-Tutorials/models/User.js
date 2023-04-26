const { Schema, model } = require('mongoose');


//TODO add User properties and validation according to assignment
const userSchrema = new Schema({
    username: { type: String, required: true, unique: true, minlength: [5, 'Username must be at least 5 characters!'] },
    hashedPassword: { type: String, required: true }
});

userSchrema.index({ username: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});


const User = model('User', userSchrema);

module.exports = User;