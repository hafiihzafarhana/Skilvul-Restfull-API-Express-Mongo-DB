const UserList = require('./../models/m_user');
const jwt = require('jsonwebtoken');
const env = require('dotenv');
env.config();

const getAllList = async (req, res) => {
    try {
        const auth = req.headers.authorization;
        const token = auth.split(" ")[1];
        const user = jwt.verify(token, process.env.CODE_JWT);
        const _idUser = user._id;

        UserList.find({"_id":_idUser}, (err, result) => {
            if(err){
                return res.status(409).json({
                    status:409,
                    token,
                    message:"You cant see some lists"
                })
            }

            return res.status(200).json({
                status:200,
                data:result[0].list,
                message:"You was got some datas"
            })
        })
    } catch (error) {
        if(error){
            return res.status(409).json({
                status:409,
                token,
                message:"You cant see some lists"
            })
        }
    }
}

const getListById = async (req, res) => {
    try {
        const auth = req.headers.authorization;
        const token = auth.split(" ")[1];
        const user = jwt.verify(token, process.env.CODE_JWT);
        const _idUser = user._id;
        const _idList = req.params.id;
        
        await UserList.find({"_id":_idUser}, {"list":{$elemMatch:{_id:_idList}}}, (err, result) => {
            if(err){
                return res.status(409).json({
                    status:409,
                    token,
                    message:"You cant see some lists"
                })
            }

            return res.status(200).json({
                status:200,
                data:result[0].list[0],
                message:"You was got a data"
            })
        }).lean()
    } catch (error) {
        
    }
}

const postList = async (req, res) => {
    try {
        const auth = req.headers.authorization;
        const token = auth.split(" ")[1];
        const user = jwt.verify(token, process.env.CODE_JWT);
        const _idUser = user._id;
        const {title, content} = req.body;
        const subList = {
            title, content
        }
        console.log(_idUser)
        UserList.updateOne({"_id":_idUser}, {$push:{"list":subList}}, (err,result) => {
            if(err){
                return res.status(409).json({
                    status:409,
                    token,
                    message:"You cant add a list"
                })
            }

            return res.status(201).json({
                status:201,
                message:"You was added a list",
                data:result
            })
        })

    } catch (error) {
        if(error){
            return res.status(409).json({
                status:409,
                token,
                message:"You cant add a list"
            })
        }
    }
}

const updateListById = async (req, res) => {
    try {
        const auth = req.headers.authorization;
        const token = auth.split(" ")[1];
        const user = jwt.verify(token, process.env.CODE_JWT);
        const _idUser = user._id;
        const {title, content} = req.body;
        const _idList = req.params.id;

        UserList.updateOne({"_id":_idUser, "list._id":_idList}, {$set:{"list.$.title":title, "list.$.content":content}}, (err, result) => {
            if(err){
                return res.status(409).json({
                    status:409,
                    token,
                    message:"You cant edit a list"
                })
            }

            return res.status(201).json({
                status:201,
                message:"You was edited a list"
            })
        })
    } catch (error) {
        if(error){
            return res.status(409).json({
                status:409,
                token,
                message:"You cant edit a list"
            })
        }   
    }
}

const deleteListById = async (req, res) => {
    try {
        const auth = req.headers.authorization;
        const token = auth.split(" ")[1];
        const user = jwt.verify(token, process.env.CODE_JWT);
        const _idUser = user._id;
        const _idList = req.params.id;

        UserList.updateOne({"_id":_idUser}, {$pull:{"list":{"_id":_idList}}}, (err, result) => {
            if(err){
                return res.status(409).json({
                    status:409,
                    token,
                    message:"You cant delete a list"
                })
            }

            return res.status(201).json({
                status:201,
                message:"You was deleted a list"
            })
        })
    } catch (error) {
        if(error){
            return res.status(409).json({
                status:409,
                token,
                message:"You cant delete a list"
            })
        }   
    }
}

const deleteAllList = async (req, res) => {
    try {
        const auth = req.headers.authorization;
        const token = auth.split(" ")[1];
        const user = jwt.verify(token, process.env.CODE_JWT);
        const _idUser = user._id;

        UserList.updateOne({"_id":_idUser}, {$set:{"list": []}}, (err, result) => {
            if(err){
                return res.status(409).json({
                    status:409,
                    token,
                    message:"You cant delete all list"
                })
            }

            return res.status(201).json({
                status:201,
                message:"You was deleted all list"
            })
        })
    } catch (error) {
        if(error){
            return res.status(409).json({
                status:409,
                token,
                message:"You cant delete all list"
            })
        }   
    }
}

module.exports = {getAllList, getListById, postList, updateListById, deleteListById, deleteAllList};