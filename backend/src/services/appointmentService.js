import db from '../models/index';
import moment from 'moment';
import { Op } from 'sequelize';

let handleBookAppointment = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Kiểm tra tính hợp lệ của ngày và giờ
            if (!data.date || !data.time) {
                return resolve({
                    errCode: 1,
                    message: 'Invalid date or time',
                });
            }

            // Kiểm tra định dạng ngày
            if (!moment(data.date, 'DD/MM/YYYY', true).isValid()) {
                return resolve({
                    errCode: 1,
                    message: 'Invalid date format. Please use DD/MM/YYYY.',
                });
            }

            // Tìm kiếm lịch làm việc của bác sĩ
            let schedule = await db.Schedule.findOne({
                where: {
                    work_day: data.day,
                    start_time: data.time,
                }
            });

            // Xử lý trường hợp không tìm thấy lịch
            if (!schedule) {
                return resolve({
                    errCode: 1,
                    message: 'Schedule not found',
                });
            }

            // Định dạng ngày theo chuẩn ISO
            data.date = moment(data.date, 'DD/MM/YYYY').format('YYYY-MM-DD');

            // Tạo mới lịch hẹn
            let appointment = await db.Appointment.create({
                patient_id: data.patient_id,
                doctor_id: data.doctor_id,
                schedule_id: schedule.id,
                date: data.date,
                status: 'pending',
                symptom: data.symptom,
                price: data.price,
            });

            resolve({
                errCode: 0,
                message: 'Appointment booked',
                data: appointment,
            });
        } catch (e) {
            console.error('Error in handleBookAppointment:', e);
            reject({
                errCode: -1,
                message: 'An error occurred while booking appointment',
            });
        }
    });
};

// Hàm cập nhật trạng thái của cuộc hẹn
let updateAppointmentStatus = async () => {
    try {
        const now = new Date();  // Lấy thời gian hiện tại

        // Tìm tất cả các cuộc hẹn có trạng thái 'pending' và thời gian khám đã qua
        const appointments = await db.Appointment.findAll({
            where: {
                status: 'pending',
                date: {
                    [Op.lte]: now,  // So sánh ngày khám với thời gian hiện tại (ngày khám đã qua hoặc bằng thời gian hiện tại)
                },
            },
        });

        // Cập nhật trạng thái thành 'completed' cho những cuộc hẹn đã đến giờ khám
        for (let appointment of appointments) {
            appointment.status = 'completed';
            await appointment.save();
        }

        console.log('Appointments updated to completed successfully!');
    } catch (error) {
        console.error('Error updating appointments:', error);
    }
}

let handleGetAppointments = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let appointmentList = await db.Appointment.findAll({
                attributes: ['id', 'patient_id', 'doctor_id', 'schedule_id', 'date', 'status', 'symptom'],
                where: { patient_id: data.id }
            });

            for (let i = 0; i < appointmentList.length; i++) {
                let schedule = await db.Schedule.findOne({
                    where: { id: appointmentList[i].schedule_id }
                });
                let room = await db.Room.findOne({
                    where: { doctor_id: appointmentList[i].doctor_id }
                })
                let doctor = await db.Doctor.findOne({
                    where: { id: appointmentList[i].doctor_id }
                })
                appointmentList[i].setDataValue('start_time', schedule.start_time);
                appointmentList[i].setDataValue('room', room.name);
                appointmentList[i].setDataValue('base', room.base);
                appointmentList[i].setDataValue('doctor', doctor.name)
            }

            resolve(appointmentList);

        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    handleBookAppointment: handleBookAppointment,
    updateAppointmentStatus: updateAppointmentStatus,
    handleGetAppointments: handleGetAppointments
};
