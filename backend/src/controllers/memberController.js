import memberService from '../services/memberService.js';

let handleAddMember = async (req, res) => {
    let data = await memberService.handleAddNewMember(req.body);
    return res.status(200).json(data);
}

let handleGetAllMembers = async (req, res) => {
    let data = await memberService.handleAllMembers(req.query);
    return res.status(200).json(data);
}

module.exports = {
    handleAddMember: handleAddMember,
    handleGetAllMembers: handleGetAllMembers
}