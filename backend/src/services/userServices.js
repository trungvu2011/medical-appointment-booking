import { raw } from 'body-parser';
import db from '../models/index';
import bcrypt from 'bcryptjs';
let salt = bcrypt.genSaltSync(10);


let handleUserLogin = (phone, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};

            let isExist = await checkUserPhone(phone);
            if (isExist) {
                let user = await db.User.findOne({
                    where: { phone: phone },
                    attributes: ['id', 'phone', 'password'],
                });
                if (user) {
                    let check = await bcrypt.compareSync(password, user.password);
                    if (check) {
                        userData.errCode = 0;
                        userData.errMessage = 'OK';
                        delete user.dataValues.password;
                        userData.user = user;
                    } else {
                        userData.errCode = 3;
                        userData.errMessage = 'Wrong password';
                    }
                } else {
                    userData.errCode = 2;
                    userData.errMessage = 'User is not exist';
                }
            }
            else {
                userData.errCode = 2;
                userData.errMessage = 'User is not exist';
            }

            resolve(userData);
        } catch (error) {
            reject(error);
        }
    });
};

let checkUserPhone = (phone) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { phone: phone }
            });

            if (user) {
                resolve(true);
            } else {
                resolve(false);
            }

        } catch (error) {
            reject(error);
        }
    });
}

let checkUserCitizenId = async (citizenId) => {
    try {
        let user = await db.User.findOne({
            where: { citizen_id: citizenId },
        });
        return user ? true : false;
    } catch (error) {
        console.error('Error in checkUserCitizenId:', error);
        throw error;
    }
}

let handleUserRegister = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.phone || !data.password || !data.name || !data.citizen_id) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter',
                });
            }
            let newUser = {};
            let isPhoneExist = await checkUserPhone(data.phone);
            let isCitizenIdExist = await checkUserCitizenId(data.citizen_id);
            if (isPhoneExist || isCitizenIdExist) {
                newUser.errCode = 2;
                newUser.errMessage = 'User is already exist';
            } else {
                let hashPassword = await bcrypt.hash(data.password, salt);
                console.log('Hashed password: ', hashPassword);
                newUser = await db.User.create({
                    phone: data.phone,
                    password: hashPassword,
                    name: data.name,
                    citizen_id: data.citizen_id
                });

            }
            resolve(newUser);

        } catch (error) {
            console.error('Error in registration:', error);
            reject(error);
        }
    });
}


module.exports = {
    handleUserLogin: handleUserLogin,
    handleUserRegister: handleUserRegister
};