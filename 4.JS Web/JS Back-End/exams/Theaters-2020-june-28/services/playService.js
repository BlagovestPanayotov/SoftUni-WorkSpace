const Play = require("../models/Play");


async function getAll() {
    return Play.find({}).lean();
}

async function getAllInOrder(criteria) {
    if (criteria == 'date') {
        return (await Play.find({}).lean()).reverse();
    } else if (criteria == 'likes') {
        return Play.find({}).sort({ userCount: -1 }).lean();;
    } else {
        return Play.find({}).lean();
    }

}

async function getRecent() {
    return Play.find({}).sort({ userCount: -1 }).limit(3).lean();
}

async function getById(id) {
    return Play.findById(id).lean();
}

async function giveLike(playId, userId) {
    const play = await Play.findById(playId);
    play.userCount++;
    play.users.push(userId);
    return play.save();
}

async function create(data) {
    return Play.create(data);
}

async function updateById(playId, data) {
    const play = await Play.findById(playId);

    play.title = data.title;
    play.description = data.description;
    play.imageUrl = data.imageUrl;
    play.isPublic = data.isPublic;

    return play.save();
}

async function deleteById(id) {
    return Play.findByIdAndRemove(id);
}

module.exports = {
    getAll,
    getAllInOrder,
    getRecent,
    getById,
    giveLike,
    create,
    updateById,
    deleteById
};