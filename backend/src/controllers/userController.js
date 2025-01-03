import userServices from '../services/userServices';

let handleLogin = async (req, res) => {
    let phone = req.body.phone;
    let password = req.body.password;

    if (!phone || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing input parameter',
        });
    }

    let userData = await userServices.handleUserLogin(phone, password);

    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {}
    });
}

let handleRegister = async (req, res) => {
    let data = await userServices.handleUserRegister(req.body);
    return res.status(200).json(data);
}

let handleEditUser = async (req, res) => {
    if (!req.body.id || !req.body.name || !req.body.gender
        || !req.body.address || !req.body.birthday || !req.body.healthInsurance) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing required parameter',
        });
    }
    let data = await userServices.handleUserEdit(req.body);
    return res.status(200).json(data);
}

module.exports = {
    handleLogin: handleLogin,
    handleRegister: handleRegister,
    handleEditUser: handleEditUser
};

