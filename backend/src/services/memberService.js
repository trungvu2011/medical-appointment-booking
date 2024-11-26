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
            let checkCitizenId = await db.User.findOne({
                where: { citizen_id: data.citizen_id }
            });

            if (checkPhone || checkCitizenId) {
                if (checkPhone && checkCitizenId && checkPhone.id === checkCitizenId.id) {
                    let checkMember = await db.User_Member.findOne({
                        where: {
                            user_id: data.user_id,
                            member_id: checkPhone.id
                        }
                    });
                    if (checkMember) {
                        memberData.errCode = 1;
                        memberData.errMessage = 'This member already exists';
                    } else {
                        console.log('data', data);
                        await db.User_Member.create({
                            user_id: data.user_id,
                            member_id: checkPhone.id
                        });
                        memberData.errCode = 0;
                        memberData.errMessage = 'Parent-child relationship added successfully';
                    }
                } else {
                    memberData.errCode = 2;
                    memberData.errMessage = 'Information of phone and citizen ID is not matched';
                }

            } else {
                let newMember = await db.User.create({
                    phone: data.phone,
                    name: data.name,
                    password: '',
                    citizen_id: data.citizen_id
                });
                await db.User_Member.create({
                    user_id: data.user_id,
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