import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine';
import initWebRoutes from './route/web';
require('dotenv').config();
import cors from 'cors';
import path from 'path';
import cron from 'node-cron';
import { updateAppointmentStatus } from './services/appointmentService';

let db = require('./models');
let app = express();


app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
    credentials: true,
}));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

db.sequelize.authenticate()
    .then(() => {
        console.log('Database connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// update appointment status every minute
cron.schedule('*/1 * * * *', () => {
    console.log('Checking for appointments to update...');
    updateAppointmentStatus();
});

app.use('/simages', express.static(path.join(__dirname, '..', 'public', 'specialty_images')));
app.use('/dimages', express.static(path.join(__dirname, '..', 'public', 'doctor_images')));
let port = process.env.PORT || 6969;
app.listen(port, () => {
    console.log(`App is running at the port ${port}`);
});