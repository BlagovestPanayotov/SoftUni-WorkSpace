const { hasUser } = require('../middlewares/guards');
const { getByUserWishes } = require('../services/bookService');
const { parseError } = require('../util/parser');

const profileController = require('express').Router();

profileController.get('/', hasUser(), async (req, res) => {
    const wishes = await getByUserWishes(req.user._id);

    res.render('profile', {
        title: 'Profile',
        wishes
    });
});

module.exports = profileController;