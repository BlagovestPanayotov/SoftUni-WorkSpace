const { hasUser } = require('../middlewares/guards');
const { createGame, getAll, getById, updateById, deleteById, buyById } = require('../services/gameService');
const { parseError } = require('../util/parser');

const gameController = require('express').Router();


gameController.get('/catalog', async (req, res) => {

    const games = await getAll();

    res.render('catalog', {
        title: 'Catalog Page - Gaming Team',
        games
    });
});

gameController.get('/create', hasUser(), (req, res) => {

    res.render('create', {
        title: 'Create Page - Gaming Team'
    });
});

gameController.post('/create', hasUser(), async (req, res) => {
    const game = {
        platform: req.body.platform,
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        price: Number(req.body.price),
        genre: req.body.genre,
        description: req.body.description,
        owner: req.user._id
    };

    try {
        if (Object.values(game).some(v => !v)) {
            throw new Error('All fields are required!');
        }

        await createGame(game);
        res.redirect('/games/catalog');
    } catch (err) {

        const body = {};
        body.select = {};
        if (req.body.platform === 'PC') {
            body.select.PC = true;
        } else if (req.body.platform === 'Nintendo') {
            body.select.Nintendo = true;
        } else if (req.body.platform === 'PS4') {
            body.select.PS4 = true;
        } else if (req.body.platform === 'PS5') {
            body.select.PS5 = true;
        } else if (req.body.platform === 'XBOX') {
            body.select.XBOX = true;
        }

        console.log(Object.assign(game, body));
        res.render('create', {
            title: 'Create Page - Gaming Team',
            body: Object.assign(game, body),
            errors: parseError(err)
        });
    }
});

gameController.get('/search', hasUser(), async (req, res) => {
    const games = await getAll(req.query);

    const search = req.query;

    search.select = {};

    if (search.platform === 'PC') {
        search.select.PC = true;
    } else if (search.platform === 'Nintendo') {
        search.select.Nintendo = true;
    } else if (search.platform === 'PS4') {
        search.select.PS4 = true;
    } else if (search.platform === 'PS5') {
        search.select.PS5 = true;
    } else if (search.platform === 'XBOX') {
        search.select.XBOX = true;
    }

    res.render('search', {
        title: 'Search - Gaming Team',
        games,
        search
    });
});


gameController.get('/:id/details', async (req, res) => {
    const game = await getById(req.params.id);

    if (game.owner.toString() == req.user?._id) {
        game.isOwner = true;
    } else if (game.boughtBy.map(b => b.toString()).includes(req.user?._id)) {
        game.isBought = true;
    }
    console.log(game);
    res.render('details', {
        title: 'Details Page',
        game
    });
});



gameController.get('/:id/edit', hasUser(), async (req, res) => {
    const game = await getById(req.params.id);

    if (game.owner.toString() != req.user._id) {
        return res.redirect('/404');
    }

    game.select = {};

    if (game.platform === 'PC') {
        game.select.PC = true;
    } else if (game.platform === 'Nintendo') {
        game.select.Nintendo = true;
    } else if (game.platform === 'PS4') {
        game.select.PS4 = true;
    } else if (game.platform === 'PS5') {
        game.select.PS5 = true;
    } else if (game.platform === 'XBOX') {
        game.select.XBOX = true;
    }


    res.render('edit', {
        title: 'Edit Page - Gaming Team',
        game
    });
});

gameController.post('/:id/edit', hasUser(), async (req, res) => {
    const game = await getById(req.params.id);
    const edited = { ...req.body };

    if (game.owner.toString() != req.user._id) {
        return res.redirect('/404');
    }

    try {
        if (Object.values(req.body).some(v => !v)) {
            throw new Error('All fields are required!');
        }

        await updateById(req.params.id, edited);
        res.redirect(`/games/${req.params.id}/details`);
    } catch (err) {

        const body = {};
        body.select = {};
        if (req.body.platform === 'PC') {
            body.select.PC = true;
        } else if (req.body.platform === 'Nintendo') {
            body.select.Nintendo = true;
        } else if (req.body.platform === 'PS4') {
            body.select.PS4 = true;
        } else if (req.body.platform === 'PS5') {
            body.select.PS5 = true;
        } else if (req.body.platform === 'XBOX') {
            body.select.XBOX = true;
        }

        res.render('edit', {
            title: 'Edit Page - Gaming Team',
            game: Object.assign(Object.assign(edited, { _id: req.params.id }), body),
            errors: parseError(err)
        });
    }

});

gameController.get('/:id/delete', hasUser(), async (req, res) => {
    const game = await getById(req.params.id);

    if (game.owner.toString() !== req.user._id) {
        return res.redirect(`/games/${req.params.id}/details`);
    }

    await deleteById(req.params.id);
    res.redirect('/games/catalog');
});

gameController.get('/:id/buy', hasUser(), async (req, res) => {
    const game = await getById(req.params.id);

    console.log(game.boughtBy.map(b => b.toString()).includes(req.user._id));

    try {
        if (game.owner.toString() == req.user._id) {
            game.isOwner = true;
            throw new Error('Cannot buy you own game');
        }
        if (game.boughtBy.map(b => b.toString()).includes(req.user._id)) {
            game.isBought = true;
            throw new Error('You have already bought this game');
        }

        await buyById(req.params.id, req.user._id);
        res.redirect(`/games/${req.params.id}/details`);
    } catch (err) {
        res.render('details', {
            title: 'Details Page',
            game,
            errors: parseError(err)
        });
    }
});

module.exports = gameController;