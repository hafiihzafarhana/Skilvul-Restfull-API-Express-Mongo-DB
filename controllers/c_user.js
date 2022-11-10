const UserList = require('./../models/m_user');
const jwt = require('jsonwebtoken');
const env = require('dotenv');
const bcrypt = require('bcryptjs');

env.config();
const login = async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await UserList.findOne({ username }).lean();
        if(!user){
            return res.status(404).json({
                status:404,
                message:"Your username or password is invalid"
            });    
        }
        
        if(await bcrypt.compare(password, user.password)){
            const token = jwt.sign({
                    _id: user._id,
                    username: user.username,
                    name:user.name                    
                },process.env.CODE_JWT
            )

            return res.status(201).json({
                status:201,
                token,
                message:"You was login"
            })
        }

        return res.status(404).json({
            status:404,
            message:"Your username or password is invalid"
        });

    } catch (error) {
        return res.status(409).json({
            status:409,
            message:error.message
        });
    }
}

const register = async (req, res) => {
    try {
        const {name, username, password:textPass} = req.body;
        const password = await bcrypt.hash(textPass, 10);
        await UserList.create({
            name, username, password
        }, (err, result) => {
            if(err){
                return res.status(409).json({
                    status:409,
                    message:err.message
                });
            }
            return res.status(201).json({
                status:201,
                message:"Your Account was registered"
            });
        })
    } catch (error) {
        return res.status(409).json({
            status:409,
            message:error.message
        });
    }
}

module.exports = {login, register};