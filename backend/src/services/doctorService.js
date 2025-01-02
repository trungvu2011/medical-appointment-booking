import db from '../models/index';

let handleAllDoctors = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let doctors = await db.Doctor.findAll();
            if (doctors && doctors.length > 0) {
                for (let i = 0; i < doctors.length; i++) {
                    let specialty = await db.Specialty.findOne({
                        where: { id: doctors[i].specialty_id }
                    });
                    let degree = await db.Degree.findOne({
                        where: { id: doctors[i].degree_id }
                    });
                    let academicRank = await db.AcademicRank.findOne({
                        where: { id: doctors[i].academic_rank_id }
                    });
                    doctors[i].setDataValue('specialty', specialty.name);
                    if (!degree) {
                        doctors[i].setDataValue('degree', null);
                        doctors[i].setDataValue('deg', null);
                    } else {
                        doctors[i].setDataValue('degree', degree.name);
                        doctors[i].setDataValue('deg', degree.abbreviation);
                    }
                    if (!academicRank) {
                        doctors[i].setDataValue('academic_rank', null);
                        doctors[i].setDataValue('aca_rank', null);
                    } else {
                        doctors[i].setDataValue('academic_rank', academicRank.name);
                        doctors[i].setDataValue('aca_rank', academicRank.abbreviation);

                    }

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

let handleGetDoctors = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let specialtyID = data.id;
            let doctors = await db.Doctor.findAll({
                where: { specialty_id: specialtyID }
            });
            if (doctors && doctors.length > 0) {
                for (let i = 0; i < doctors.length; i++) {
                    let specialty = await db.Specialty.findOne({
                        where: { id: doctors[i].specialty_id }
                    });
                    let degree = await db.Degree.findOne({
                        where: { id: doctors[i].degree_id }
                    });
                    let academicRank = await db.AcademicRank.findOne({
                        where: { id: doctors[i].academic_rank_id }
                    });
                    doctors[i].setDataValue('specialty', specialty.name);
                    if (!degree) {
                        doctors[i].setDataValue('degree', null);
                        doctors[i].setDataValue('deg', null);
                    } else {
                        doctors[i].setDataValue('degree', degree.name);
                        doctors[i].setDataValue('deg', degree.abbreviation);
                    }
                    if (!academicRank) {
                        doctors[i].setDataValue('academic_rank', null);
                        doctors[i].setDataValue('aca_rank', null);
                    } else {
                        doctors[i].setDataValue('academic_rank', academicRank.name);
                        doctors[i].setDataValue('aca_rank', academicRank.abbreviation);

                    }

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

let handleDateListByDoctor = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let doctorId = data.doctor_id;
            let doctor = await db.Doctor.findOne({
                where: { id: doctorId }
            });
            if (!doctor) {
                resolve({
                    errCode: 1,
                    errMessage: 'Doctor not found'
                });
            }
            let dateList = await db.Doctor_Schedule.findAll({
                where: { doctor_id: doctorId }
            });
            let bookedDateList = await db.Appointment.findAll({
                attributes: ['id', 'patient_id', 'doctor_id', 'schedule_id', 'date', 'status', 'symptom'],
                where: { doctor_id: doctorId, status: 'pending' }
            });
            for (let i = 0; i < bookedDateList.length; i++) {
                let schedule = await db.Schedule.findOne({
                    where: { id: bookedDateList[i].schedule_id }
                });
                bookedDateList[i].setDataValue('start_time', schedule.start_time);
            }
            let list = [];
            for (let i = 0; i < dateList.length; i++) {
                let schedule_id = dateList[i].schedule_id;
                let date = await db.Schedule.findOne({
                    where: { id: schedule_id }
                });
                list.push(date);
            }
            resolve({
                bookedDateList: bookedDateList,
                dateList: list,
            });
        } catch (error) {
            reject(error);
        }
    });
}

let handleDoctorById = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let doctor = await db.Doctor.findOne({
                where: { id: data.id }
            });
            if (doctor) {
                let specialty = await db.Specialty.findOne({
                    where: { id: doctor.specialty_id }
                });
                let degree = await db.Degree.findOne({
                    where: { id: doctor.degree_id }
                });
                let academicRank = await db.AcademicRank.findOne({
                    where: { id: doctor.academic_rank_id }
                });
                doctor.setDataValue('specialty', specialty.name);
                if (!degree) {
                    doctor.setDataValue('degree', null);
                    doctor.setDataValue('deg', null);
                } else {
                    doctor.setDataValue('degree', degree.name);
                    doctor.setDataValue('deg', degree.abbreviation);
                }
                if (!academicRank) {
                    doctor.setDataValue('academic_rank', null);
                    doctor.setDataValue('aca_rank', null);
                } else {
                    doctor.setDataValue('academic_rank', academicRank.name);
                    doctor.setDataValue('aca_rank', academicRank.abbreviation);
                }

                let room = await db.Room.findOne({
                    where: { doctor_id: doctor.id }
                });
                doctor.setDataValue('base', room.base);

                resolve({
                    errCode: 0,
                    data: doctor
                });
            } else {
                resolve({
                    errCode: 1,
                    errMessage: 'Doctor not found'
                });
            }
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    handleAllDoctors: handleAllDoctors,
    handleGetDoctors: handleGetDoctors,
    handleAllSpecialties: handleAllSpecialties,
    handleDateListByDoctor: handleDateListByDoctor,
    handleDoctorById: handleDoctorById
}