import express from 'express';
import homeController from '../controllers/homeController';
import userController from '../controllers/userController';
import memberController from '../controllers/memberController.js';

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);

    router.get('/about', (req, res) => {
        return res.send('About Page');
    });

    router.post('/api/login', userController.handleLogin);
    router.post('/api/register', userController.handleRegister);

    router.post('/api/add-member', memberController.handleAddMember);

    return app.use("/", router);
}

module.exports = initWebRoutes;