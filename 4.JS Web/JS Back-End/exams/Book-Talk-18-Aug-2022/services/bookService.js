const Book = require("../models/Book");


async function getAll() {
    return Book.find({}).lean();
}

async function getByUserWishes(userId) {
    return Book.find({ wishingList: userId }).lean();
}

async function create(book) {
    return Book.create(book);
}

async function getById(id) {
    return Book.findById(id).lean();
}

async function updateById(id, data) {
    const book = await Book.findById(id);

    book.title = data.title;
    book.author = data.author;
    book.genre = data.genre;
    book.stars = Number(data.stars);
    book.imageUrl = data.imageUrl;
    book.review = data.review;

    return book.save();
}

async function deleteById(id) {
    return Book.findByIdAndRemove(id);
}

async function wishById(bookId, userId) {
    const book = await Book.findById(bookId);

    book.wishingList.push(userId);
    return book.save();

}

module.exports = {
    getAll,
    getByUserWishes,
    create,
    getById,
    updateById,
    deleteById,
    wishById
}

