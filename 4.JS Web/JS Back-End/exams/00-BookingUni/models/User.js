const { Schema, model } = require('mongoose');


const userSchrema = new Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true, match: [/^[a-zA-Z0-9]+$/i, 'Username may contain only english letters and numbers!'] },
    hashedPassword: { type: String, required: true }
});

userSchrema.index({ email: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

userSchrema.index({ username: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});


const User = model('User', userSchrema);

module.exports = User;