const Game = require("../models/Game");  //TODO change on needed way


async function getAll(search) {
    const query = {};
    if (search) {
        query.name = new RegExp(search.name, 'i');
        query.platform = new RegExp(search.platform, 'i');
    }
    return Game.find(query).lean();
}

async function createGame(data) {
    return Game.create(data);
}

async function getById(id) {
    return Game.findById(id).lean();
}

async function updateById(id, data) {
    const game = await Game.findById(id);

    game.platform = data.platform;
    game.name = data.name;
    game.imageUrl = data.imageUrl;
    game.price = Number(data.price);
    game.genre = data.genre;
    game.description = data.description;

    return game.save();
}

async function deleteById(id) {
    return Game.findByIdAndRemove(id);
}

async function buyById(gameId, userId) { //TODO change if needed
    const game = await Game.findById(gameId);

    game.boughtBy.push(userId);
    return game.save();
}

module.exports = {
    getAll,
    createGame,
    getById,
    updateById,
    deleteById,
    buyById
};