const { create, getById, giveLike, updateById, deleteById } = require('../services/playService');
const { parseError } = require('../util/parser');

const playController = require('express').Router();


playController.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create Play',
    });
});

playController.post('/create', async (req, res) => {
    const newPlay = {};

    newPlay.title = req.body.title;
    newPlay.description = req.body.description;
    newPlay.imageUrl = req.body.imageUrl;
    newPlay.isPublic = !!req.body.public;
    newPlay.owner = req.user._id;


    try {
        await create(newPlay);
        res.redirect('/');
    } catch (err) {
        res.render('create', {
            title: 'Create Play',
            body: newPlay,
            errors: parseError(err)
        });

    }

});

playController.get('/:id/details', async (req, res) => {
    const play = await getById(req.params.id);
    play.isOwner = play.owner.toString() == req.user._id;

    if (!play.isPublic && !play.isOwner) return res.redirect('/');

    play.hasLiked = play.users.map(x => x.toString()).includes(req.user._id);

    res.render('details', {
        title: play.title,
        play
    });
});

playController.get('/:id/like', async (req, res) => {
    const play = await getById(req.params.id);

    if (play.users.map(x => x.toString()).includes(req.user._id) == false
        && play.owner != req.user._id) {
        await giveLike(req.params.id, req.user._id);
    }
    res.redirect(`/play/${req.params.id}/details`);
});

playController.get('/:id/edit', async (req, res) => {
    const play = await getById(req.params.id);
    if (play.owner.toString() !== req.user._id) return res.redirect(`/play/${req.params.id}/details`);

    res.render('edit', {
        title: 'Edit ' + play.title,
        play
    });
});

playController.post('/:id/edit', async (req, res) => {
    const play = await getById(req.params.id);
    if (play.owner.toString() !== req.user._id) return res.redirect(`/play/${req.params.id}/details`);

    try {
        await updateById(req.params.id, req.body);
        res.redirect(`/play/${req.params.id}/details`);
    } catch (err) {
        res.render('edit', {
            title: 'Edit ' + play.title,
            errors: parseError(err),
            play
        });
    }

});

playController.get('/:id/delete', async (req, res) => {
    const play = await getById(req.params.id);
    if (play.owner.toString() !== req.user._id) return res.redirect(`/play/${req.params.id}/details`);

    await deleteById(req.params.id);
    res.redirect('/');
});


module.exports = playController;