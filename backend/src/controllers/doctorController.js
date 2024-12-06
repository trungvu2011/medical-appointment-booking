import doctorService from '../services/doctorService.js';

let handleGetAllDoctors = async (req, res) => {
    let data = await doctorService.handleAllDoctors();
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

module.exports = {
    handleGetAllDoctors: handleGetAllDoctors,
    handleGetAllSpecialties: handleGetAllSpecialties,
    handleGetDateListByDoctor: handleGetDateListByDoctor
};