const { Types } = require('mongoose');
const { Schema, model } = require('mongoose');


const URL_PATTERN = /^https?:\/\/.+$/i;

const playSchema = new Schema({
    title: { type: String, minlength:[1,'Title is required!'] }, //unique
    description: {
        type: String, minlength:[1,'Descritpion is required!'],maxlength: [50, 'Description can be the most 50 characters long!']
    },
    imageUrl: {
        type: String,
        validate: {
            validator: (value) => URL_PATTERN.test(value),
            message: 'Invalid URL'
        }
    },
    isPublic: { type: Boolean, default: false },
    createdAt: { type: String, required: true, default: () => (new Date()).toISOString().slice(0, 10) },
    users: { type: [Types.ObjectId], ref: 'User', default: [] },
    userCount: { type: Number, default: 0 },
    owner: { type: Types.ObjectId, ref: 'User' }
});

playSchema.index({ title: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const Play = model('Play', playSchema);

module.exports = Play;