import { raw } from 'body-parser';
import { where } from 'sequelize';
let db = require('../models/index');

let handleAddNewMember = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let memberData = {};
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
                    memberData.errCode = 1;
                    memberData.errMessage = 'This member already exists';
                } else {
                    await db.User_Member.create({
                        user_id: data.account_id,
                        member_id: checkPhone.id
                    });
                    memberData.errCode = 0;
                    memberData.errMessage = 'Parent-child relationship added successfully';
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
                memberData.errCode = 0;
                memberData.errMessage = 'Add new member successfully';
            }
            resolve(memberData);
        } catch (error) {
            reject(error);
        }
    });
}

let handleAllMembers = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let memberList = await db.User_Member.findAll({
                where: { user_id: data.id }
            });

            let allMembers = [];

            for (let i = 0; i < memberList.length; i++) {
                let memberInfo = await db.User.findOne({
                    where: { id: memberList[i].member_id },
                    attributes: {
                        include: ['id', 'name', 'phone', 'citizen_id'],
                        exclude: ['password', 'createdAt', 'updatedAt']
                    },

                });
                allMembers.push(memberInfo);
            }

            resolve(allMembers);

        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    handleAddNewMember: handleAddNewMember,
    handleAllMembers: handleAllMembers
}