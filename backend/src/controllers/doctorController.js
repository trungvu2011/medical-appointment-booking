import doctorService from '../services/doctorService.js';

let handleGetAllDoctors = async (req, res) => {
    let data = await doctorService.handleAllDoctors();
    return res.status(200).json(data);
}

let handleGetDoctors = async (req, res) => {
    let data = await doctorService.handleGetDoctors(req.query);
    return res.status(200).json(data);
}

let handleGetAllSpecialties = async (req, res) => {
    let data = await doctorService.handleAllSpecialties();
    return res.status(200).json(data);
}

let handleGetDateListByDoctor = async (req, res) => {
    let data = await doctorService.handleDateListByDoctor(req.query);
    return res.status(200).json(data);
}

let handleGetDoctorById = async (req, res) => {
    // Check if the query contains doctorId
    if (!req.query.id) {
        return res.status(500).json({
            errCode: -1,
            message: 'Missing required parameter'
        });
    }
    let data = await doctorService.handleDoctorById(req.query);
    return res.status(200).json(data);
}

module.exports = {
    handleGetAllDoctors: handleGetAllDoctors,
    handleGetDoctors: handleGetDoctors,
    handleGetAllSpecialties: handleGetAllSpecialties,
    handleGetDateListByDoctor: handleGetDateListByDoctor,
    handleGetDoctorById: handleGetDoctorById
};