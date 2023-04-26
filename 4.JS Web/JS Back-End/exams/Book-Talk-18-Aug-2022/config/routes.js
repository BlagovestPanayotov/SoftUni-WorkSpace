const authController = require("../controllers/authController");
const bookController = require("../controllers/bookController");
const homeController = require("../controllers/homeController");
const profileController = require("../controllers/profileController");


module.exports = (app) => {
    app.use('/auth', authController);
    app.use('/books', bookController);
    app.use('/profile', profileController);

    app.use(homeController);

    // app.use((err, req, res, next) => {
    //     console.log('Global error handling!');
    //     console.log(err.message);
    //     res.redirect('/');
    // });
};