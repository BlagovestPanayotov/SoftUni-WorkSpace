const { Schema, model, Types } = require('mongoose');


const URL_PATTERN = /^https?:\/\/.+$/i;

const hotelSchema = new Schema({
    name: { type: String, required: true, unique: true, minlength: [4, "Hotel must be at least 4 characters long!"] },
    city: { type: String, required: true, minlength: [3, "City must be at least 3 characters long!"] },
    imageUrl: {
        type: String, required: true, validate: {
            validator: (value) => { URL_PATTERN.test(value); },
            message: 'Image URL in not valid.'
        }
    },
    rooms: { type: Number, required: true, min: [1, 'Rooms must be between 1 and 100!'], max: [100, 'Rooms must be between 1 and 100!'] },
    bookings: { type: [Types.ObjectId], ref: 'User', default: [] },
    owner: { type: Types.ObjectId, ref: 'User', required: true }
});


hotelSchema.index({ name: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const Hotel = model('Hotel', hotelSchema);

module.exports = Hotel;