const UserList = require('./../models/m_user');
const jwt = require('jsonwebtoken');
const env = require('dotenv');
const bcrypt = require('bcryptjs');
const {res_error, res_success} = require('./../res_validate')
env.config();

const login = async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await UserList.findOne({ username }).lean();
        if(!user) res_error(res, 409, "error 409","Your username or password is invalid")
        
        if(await bcrypt.compare(password, user.password)){
            const token = jwt.sign({
                    _id: user._id,
                    username: user.username,
                    name:user.name                    
                },process.env.CODE_JWT
            )

            return res_success(res, 200, "200 Success", "You was login", token)
    } catch (error) {
        if(error) res_error(res, 409, "error 409","Your username or password is invalid")
    }
}

const register = async (req, res) => {
    try {
        const {name, username, password:textPass} = req.body;
        const password = await bcrypt.hash(textPass, 10);
        await UserList.create({
            name, username, password
        }, (err, result) => {
            if(err) res_error(res, 409, "error 409",err.message)
                
            return res_success(res, 200, "200 Success", "Your Account was registered")
        })
    } catch (error) {
        if(error) res_error(res, 409, "error 409",error.message)
    }
}

module.exports = {login, register};