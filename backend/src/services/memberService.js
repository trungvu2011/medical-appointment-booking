import { raw } from 'body-parser';
let db = require('../models/index');

let handleAddNewMember = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let checkPhone = await db.User.findOne({
                where: { phone: data.phone }
            });

            if (checkPhone) {
                let checkMember = await db.User_Member.findOne({
                    where: {
                        user_id: data.account_id,
                        member_id: checkPhone.id
                    }
                });
                if (checkMember) {
                    return resolve({ message: 'This member already exists' });
                } else {
                    await db.User_Member.create({
                        user_id: data.account_id,
                        member_id: checkPhone.id
                    });
                    resolve({ message: 'Parent-child relationship added successfully' });
                }

            } else {
                let newMember = await db.User.create({
                    phone: data.phone,
                    name: data.name,
                    password: '',
                    citizen_id: data.citizen_id
                });
                await db.User_Member.create({
                    user_id: data.account_id,
                    member_id: newMember.id
                });
                resolve({ message: 'New member added successfully' });
            }

        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    handleAddNewMember: handleAddNewMember
}