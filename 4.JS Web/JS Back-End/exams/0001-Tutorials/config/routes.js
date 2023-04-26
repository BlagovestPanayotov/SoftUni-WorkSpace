const authController = require("../controllers/authController");
const courseConttroler = require("../controllers/courseConttroler");
const homeController = require("../controllers/homeController");
const { hasUser, isGuest } = require("../middlewares/guards");


module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/course', hasUser(), courseConttroler);

    // app.use((err, req, res, next) => {
    //     console.log('Global error handling!');
    //     console.log(err.message);
    //     res.redirect('/');
    // });
};