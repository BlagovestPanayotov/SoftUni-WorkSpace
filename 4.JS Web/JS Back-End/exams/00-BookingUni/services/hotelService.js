const Hotel = require("../models/Hotel");


async function getAll() {
    return Hotel.find({}).lean();
}

async function getById(id) {
    return Hotel.findById(id).lean();
}

async function getByUserBooknig(userId) {
    return await Hotel.find({ bookings: userId }).lean();
}

async function create(hotel) {
    return await Hotel.create(hotel);
}

async function update(id, hotel) {
    const existing = await Hotel.findById(id);

    existing.name = hotel.name;
    existing.city = hotel.city;
    existing.imageUrl = hotel.imageUrl;
    existing.rooms = hotel.rooms;

    await existing.save();
}

async function deleteById(id) {
    await Hotel.findByIdAndRemove(id);
}

async function bookRoom(hotelId, userId) {
    const hotel = await Hotel.findById(hotelId);

    if (hotel.bookings.includes(userId)) {
        throw new Error('Cannot book twice');
    }

    hotel.bookings.push(userId);
    await hotel.save();
}

module.exports = {
    getAll,
    getById,
    getByUserBooknig,
    create,
    update,
    deleteById,
    bookRoom
};
