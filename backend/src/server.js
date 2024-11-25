import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine';
import initWebRoutes from './route/web';
require('dotenv').config();
import cors from 'cors';

let db = require('./models');
let app = express();

const allowedOrigins = ['http://localhost:3000', 'http://192.168.1.209:3000'];
app.use(cors({
    origin: (origin, callback) => {
        // Nếu không có origin (vd: Postman), hoặc nằm trong danh sách allowedOrigins, cho phép
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Các method được phép
    credentials: true, // Cho phép gửi cookie nếu cần
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

let port = process.env.PORT || 6969;
app.listen(port, () => {
    console.log(`App is running at the port ${port}`);
});