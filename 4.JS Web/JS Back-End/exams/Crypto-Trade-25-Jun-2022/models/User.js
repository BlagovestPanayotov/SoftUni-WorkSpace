const { Schema, model } = require('mongoose');


const userSchrema = new Schema({
    username: { type: String, required: true, unique: true, minlength: [5, 'Username must be at least 5 characters!'] },
    email: { type: String, required: true, unique: true, minlength: [10, 'Email must be at least 10 characters!'] },
    hashedPassword: { type: String, required: true }
});

userSchrema.index({ email: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});


const User = model('User', userSchrema);

module.exports = User;