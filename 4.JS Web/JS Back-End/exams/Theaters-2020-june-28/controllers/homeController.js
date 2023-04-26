const { hasUser } = require('../middlewares/guards');
const { getAll, getRecent, getAllInOrder } = require('../services/playService');

const homeController = require('express').Router();

//TODO replace with real controller by assignment
homeController.get('/', async (req, res) => {
    let plays;

    if (req.user) {
        plays = await getAll();
    } else {
        plays = await getRecent();
    }

    res.render('home', {
        title: 'Home Page',
        plays: plays.map(x => ({ ...x, user: !!req.user, isOwner: x.owner.toString() == req.user?._id }))
    });
});

homeController.get('/newest', hasUser(), async (req, res) => {
    const plays = await getAllInOrder('date');

    res.render('home', {
        title: 'Newest plays',
        plays: plays.map(x => ({ ...x, user: !!req.user, isOwner: x.owner.toString() == req.user?._id }))
    });
});

homeController.get('/mostliked', hasUser(), async (req, res) => {
    const plays = await getAllInOrder('likes');

    res.render('home', {
        title: 'Most liked plays',
        plays: plays.map(x => ({ ...x, user: !!req.user, isOwner: x.owner.toString() == req.user?._id }))
    });
});
module.exports = homeController;