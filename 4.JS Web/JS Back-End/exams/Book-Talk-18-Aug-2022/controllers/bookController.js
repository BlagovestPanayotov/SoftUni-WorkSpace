const { hasUser } = require('../middlewares/guards');
const { getAll, create, getById, updateById, deleteById, wishById } = require('../services/bookService');
const { parseError } = require('../util/parser');

const bookController = require('express').Router();

bookController.get('/catalog', async (req, res) => {

    const books = await getAll();

    res.render('catalog', {
        title: 'Catalog Page',
        books
    });
});

bookController.get('/create', hasUser(), async (req, res) => {
    res.render('create', {
        title: 'Create Page',
    });
});

bookController.post('/create', hasUser(), async (req, res) => {
    try {
        if (Object.values(req.body).includes('')) {
            throw new Error('All fields are required!');
        }

        await create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            stars: Number(req.body.stars),
            imageUrl: req.body.imageUrl,
            review: req.body.review,
            owner: req.user._id
        });

        res.redirect('/books/catalog');

    } catch (err) {
        res.render('create', {
            title: 'Create Page',
            body: req.body,
            errors: parseError(err)
        });
    }
});

bookController.get('/:id/details', async (req, res) => {
    const book = await getById(req.params.id);

    if (req.user) {
        book.isOwner = book.owner.toString() == req.user._id;
        if (!book.isOwner) {
            book.hadWished = book.wishingList.map(x => x.toString()).includes(req.user._id);
        }
    }
    console.log(book.hadWished);
    res.render('details', {
        title: 'Details Page',
        book
    });
});

bookController.get('/:id/edit', async (req, res) => {
    const book = await getById(req.params.id);

    if (book.owner.toString() !== req.user._id) {
        return res.redirect(`/books/${req.params.id}/details`);
    }

    res.render('edit', {
        title: 'Edit Page',
        book
    });

});

bookController.post('/:id/edit', async (req, res) => {
    const book = await getById(req.params.id);

    if (book.owner.toString() !== req.user._id) {
        return res.redirect(`/books/${req.params.id}/details`);
    }

    try {
        await updateById(req.params.id, req.body);
        res.redirect(`/books/${req.params.id}/details`);
    } catch (err) {
        res.render('edit', {
            title: 'Edit Page',
            errors: parseError(err),
            book: { ...req.body, _id: req.params.id }
        });
    }

});

bookController.get('/:id/delete', async (req, res) => {
    const book = await getById(req.params.id);

    if (book.owner.toString() !== req.user._id) {
        return res.redirect(`/books/${req.params.id}/details`);
    }

    await deleteById(req.params.id);
    res.redirect('/books/catalog');
});

bookController.get('/:id/wish', async (req, res) => {
    const book = await getById(req.params.id);

    if (book.owner.toString() == req.user._id) {
        return res.redirect(`/books/${req.params.id}/details`);
    }

    try {
        if (book.wishingList.map(x => x.toString()).includes(req.user._id)) {
            throw new Error('You cannot wish it twice!');
        }

        await wishById(req.params.id, req.user._id);
        res.redirect(`/books/${req.params.id}/details`);
    } catch (err) {
        res.render('details', {
            title: 'Details Page',
            errors: parseError(err),
            book
        });
    }

});



module.exports = bookController;