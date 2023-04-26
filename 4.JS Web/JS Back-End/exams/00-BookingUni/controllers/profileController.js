const { hasUser } = require('../middlewares/guards');
const { getByUserBooknig } = require('../services/hotelService');

const profileController = require('express').Router();

profileController.get('/', hasUser(), async (req, res) => {
    const bookings = await getByUserBooknig(req.user._id);

    res.render('profile', {
        title: 'Profile Page',
        user: Object.assign({ bookings }, req.user)
    });
});

module.exports = profileController;