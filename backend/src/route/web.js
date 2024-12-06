import express from 'express';
import homeController from '../controllers/homeController';
import userController from '../controllers/userController';
import memberController from '../controllers/memberController.js';
import doctorController from '../controllers/doctorController.js';

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);

    router.get('/about', (req, res) => {
        return res.send('About Page');
    });

    router.post('/api/login', userController.handleLogin);
    router.post('/api/register', userController.handleRegister);

    router.post('/api/add-member', memberController.handleAddMember);
    router.get('/api/get-all-members', memberController.handleGetAllMembers);

    router.get('/api/get-all-doctors', doctorController.handleGetAllDoctors);
    router.get('/api/get-all-specialties', doctorController.handleGetAllSpecialties);

    router.get('/api/get-date-list-by-doctor', doctorController.handleGetDateListByDoctor);

    return app.use("/", router);
}

module.exports = initWebRoutes;