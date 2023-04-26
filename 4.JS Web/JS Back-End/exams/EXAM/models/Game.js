const { Schema, model, Types } = require('mongoose');


const URL_PATTERN = /^https?:\/\/.+$/i;

const gameSchema = new Schema({
    name: { type: String, minlength: [4, 'Name must be at least 4 characters long!'] },
    imageUrl: {
        type: String,
        validate: {
            validator: (value) => URL_PATTERN.test(value),
            message: 'Invalid URL'
        }
    },
    price: { type: Number, min: [1, 'Price must be a positive number'] },
    description: { type: String, minlength: [10, 'Desctiption must be at least 10 characters'] },
    platform: {
        type: String,
        enum: {
            values: ['PC', 'Nintendo', 'PS4', 'PS5', 'XBOX'],
            message: 'The platform type is not recognized',
        }
    },
    genre: { type: String, minlength: [2, 'Genre must be at least 2 characters long!'] },
    boughtBy: { type: [Types.ObjectId], ref: 'User', default: [] },
    owner: { type: Types.ObjectId, ref: 'User' }
});

const Game = model('Game', gameSchema);

module.exports = Game;


// `Model.create()` cannot run without a model as `this`. Make sure you are calling `MyModel.create()` where `MyModel` is a Mongoose model.