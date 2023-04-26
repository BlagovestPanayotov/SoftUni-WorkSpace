const authController = require("../controllers/authController");
const gameController = require("../controllers/gameController");
const homeController = require("../controllers/homeController");


module.exports = (app) => {
    app.use('/auth', authController);
    app.use('/games', gameController);


    app.use('/', homeController);

    // app.use((err, req, res, next) => {
    //     console.log('Global error handling!');
    //     console.log(err.message);
    //     res.redirect('/');
    // });
};