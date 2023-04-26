const { Schema, model } = require('mongoose');


const userSchrema = new Schema({
    username: { type: String, unique: true, minlength: [4, 'Username must be at least 4 characters!'] },
    email: { type: String, minlength: [10, 'Email must be at least 10 characters!'] },
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