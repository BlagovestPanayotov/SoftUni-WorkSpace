const { isOwner } = require('../middlewares/guards');
const preload = require('../middlewares/preload');
const { createCourse, getById, deleteById, updateById, enrollUser } = require('../services/courseService');
const { parseError } = require('../util/parser');

const courseConttroler = require('express').Router();

courseConttroler.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create Course'
    });
});

courseConttroler.get('/:id/details', preload(true), async (req, res) => {
    const course = res.locals.course;

    course.isOwner = course.owner == req.user._id;
    course.enrolled = course.users.map(x => x.toString()).includes(req.user._id);
    res.render('details', {
        title: course.title,
        course,
    });
});

courseConttroler.post('/create', async (req, res) => {
    const course = {
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        duration: req.body.duration,
        owner: req.user._id
    };
    try {
        await createCourse(course);
        res.redirect('/');
    } catch (err) {
        res.render('create', {
            title: 'Create Course',
            errors: parseError(err),
            body: course
        });
    }
});

courseConttroler.get('/:id/delete', preload(), isOwner(), async (req, res) => {
    await deleteById(req.params.id);
    res.redirect('/');
});

courseConttroler.get('/:id/edit', preload(true), isOwner(), async (req, res) => {
    const course = res.locals.course;

    res.render('edit', {
        title: 'Edit ' + course.title,
        course
    });
});

courseConttroler.post('/:id/edit', preload(), isOwner(), async (req, res) => {
    const course = res.locals.course;

    try {
        await updateById(course, req.body);
        res.redirect(`/course/${req.params.id}/details`);
    } catch (err) {
        res.render('edit', {
            title: 'Edit ' + req.body.title,
            course: Object.assign(course, req.body),
            errors: parseError(err)
        });
    }
});

courseConttroler.get('/:id/enroll', preload(), async (req, res) => {
    const course = res.locals.course;

    if (course.owner.toString() != req.user._id
        && !course.users.map(x => x.toString()).includes(req.user._id)) {
        await enrollUser(course, req.user._id);
    }

    res.redirect(`/course/${req.params.id}/details`);
});

module.exports = courseConttroler;