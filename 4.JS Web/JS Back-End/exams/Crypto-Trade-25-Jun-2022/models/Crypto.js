const { Schema, model, Types } = require('mongoose');


const URL_PATTERN = /^https?:\/\/.+$/i;

const cryptoSchema = new Schema({
    name: { type: String, minlength: [2, 'Name must be at least 2 characters long!'] },
    imageUrl: {
        type: String,
        validate: {
            validator: (value) => URL_PATTERN.test(value),
            message: 'Invalid URL'
        }
    },
    price: { type: Number, min: [1, 'Price must be a positive number'] },
    description: { type: String, minlength: [10, 'Desctiption must be at least 10 characters'] },
    paymentMethod: {
        type: String,
        enum: {
            valuses: ['crypto - wallet', 'credit - card', 'debit - card', 'paypal'],
            message: 'The method type is not recognized'
        }
    },
    buy: { type: [Types.ObjectId], ref: 'User', default: [] },
    owner: { type: Types.ObjectId, ref: 'User' }
});

const Crypto = model('Crypto', cryptoSchema);

module.exports = Crypto;