import doctorService from '../services/doctorService.js';

let handleGetAllDoctors = async (req, res) => {
    let data = await doctorService.handleAllDoctors(req.query);
    return res.status(200).json(data);
}

module.exports = {
    handleGetAllDoctors: handleGetAllDoctors
};