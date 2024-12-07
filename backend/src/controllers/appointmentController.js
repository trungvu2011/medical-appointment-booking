import appointmentService from '../services/appointmentService.js';


let handleBookAppointment = async (req, res) => {
    console.log('Data from client:', req.body);
    let data = await appointmentService.handleBookAppointment(req.body);
    return res.status(200).json(data);
}

module.exports = {
    handleBookAppointment: handleBookAppointment
};