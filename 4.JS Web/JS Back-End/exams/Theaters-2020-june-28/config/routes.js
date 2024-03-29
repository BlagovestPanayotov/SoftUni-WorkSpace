const authController = require("../controllers/authController");
const homeController = require("../controllers/homeController");
const playController = require("../controllers/playController");
const { hasUser } = require("../middlewares/guards");


module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/play', hasUser(), playController);

    // app.use((err, req, res, next) => {
    //     console.log('Global error handling!');
    //     console.log(err.message);
    //     res.redirect('/');
    // });
};