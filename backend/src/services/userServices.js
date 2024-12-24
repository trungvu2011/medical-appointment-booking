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
                    attributes: ['id', 'phone', 'password', 'name', 'citizen_id', 'birthday', 'address', 'healthInsurance'],
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
            if (!data.phone || !data.password || !data.name || !data.citizen_id
                || !data.birthday || !data.healthInsurance || !data.address) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter',
                });
            }

            let newUser = {};
            let isPhoneExist = await checkUserPhone(data.phone);
            let isCitizenIdExist = await checkUserCitizenId(data.citizen_id);

            if (isPhoneExist || isCitizenIdExist) {
                let existUser = await db.User.findOne({
                    where: {
                        phone: data.phone,
                    }
                });

                if (!existUser.password) {
                    existUser.name = data.name;
                    existUser.citizen_id = data.citizen_id;
                    existUser.password = bcrypt.hashSync(data.password, salt);
                    existUser.phone = data.phone;
                    existUser.birthday = data.birthday;
                    existUser.healthInsurance = data.healthInsurance;
                    await existUser.save();
                    newUser = existUser;
                } else {
                    newUser.errCode = 2;
                    newUser.errMessage = 'User is already exist';
                }
            } else {
                let hashPassword = await bcrypt.hash(data.password, salt);
                newUser = await db.User.create({
                    phone: data.phone,
                    password: hashPassword,
                    name: data.name,
                    citizen_id: data.citizen_id,
                    address: data.address,
                    birthday: data.birthday, // Lưu ngày sinh đã chuyển định dạng
                    healthInsurance: data.healthInsurance,
                });
            }

            resolve(newUser);

        } catch (error) {
            console.error('Error in registration:', error);
            reject(error);
        }
    });
}


let handleUserEdit = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({ where: { id: data.id, } })

            let updatedUser = await user.update({
                name: data.name,
                citizen_id: data.citizen_id,
                address: data.address,
                healthInsurance: data.healthInsurance,
                birthday: data.birthday
            })

            resolve({
                errCode: 0,
                errMessage: 'Updated',
                updatedUser
            });
        } catch (error) {
            console.error('Error in edition:', error);
            reject(error);
        }
    });
}


module.exports = {
    handleUserLogin: handleUserLogin,
    handleUserRegister: handleUserRegister,
    handleUserEdit: handleUserEdit
};