const { Schema, model, Types } = require("mongoose");

const URL_PATTERN = /^https?:\/\/.+$/i;

const bookSchema = new Schema({
    title: { type: String, minlength: [2, 'Title must be at least 2 characters long!'] },
    author: { type: String, minlength: [5, 'Author must be at least 5 characters long!'] },
    genre: { type: String, minlength: [3, 'Genre must be at least 5 characters long!'] },
    stars: { type: Number, min: [1, 'Stars must be a number between 1 and 5!'], max: [5, 'Stars must be a number between 1 and 5!'] },
    imageUrl: {
        type: String,
        validate: {
            validator: (value) => URL_PATTERN.test(value),
            message: 'Invalid URL'
        }
    },
    review: { type: String, minlength: [10, 'The Review must be a minimum of 10 characters long.'] },
    wishingList: { type: [Types.ObjectId], ref: 'User' },
    owner: { type: Types.ObjectId, ref: 'User' }
});

const Book = model('Book', bookSchema);

module.exports = Book;