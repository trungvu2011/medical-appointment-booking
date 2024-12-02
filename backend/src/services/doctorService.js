import db from '../models/index';

let handleAllDoctors = async (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            let doctors = await db.Doctor.findAll();
            if (doctors && doctors.length > 0) {
                for (let i = 0; i < doctors.length; i++) {
                    let specialty = await db.Specialty.findOne({
                        where: { id: doctors[i].specialty_id }
                    });
                    doctors[i].setDataValue('specialty', specialty.name);
                }
                resolve({
                    errCode: 0,
                    data: doctors
                });
            } else {
                resolve({
                    errCode: 1,
                    errMessage: 'No doctors found'
                });
            }
        } catch (error) {
            reject(error);
        }
    });
}

let handleAllSpecialties = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let specialties = await db.Specialty.findAll();
            if (specialties && specialties.length > 0) {
                resolve({
                    errCode: 0,
                    data: specialties
                });
            } else {
                resolve({
                    errCode: 1,
                    errMessage: 'No specialties found'
                });
            }
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    handleAllDoctors: handleAllDoctors,
    handleAllSpecialties: handleAllSpecialties
}