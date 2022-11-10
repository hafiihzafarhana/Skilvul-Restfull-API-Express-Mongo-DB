const { default: mongoose } = require("mongoose");

const userListSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:[3, 'Must be at least 3 character']
    },
    username:{
        type:String,
        required:true,
        unique:true,
        minlength:[8, 'Must be at least 8 character']
    },
    password:{
        type:String,
        required:true,
        minlength:[8, 'Must be at least 8 character']
    },
    list:[{
        title:String,
        content:String,
        createdAt: {
            type: Date,
            default: new Date(),
        },
    }],
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const UserList = mongoose.model('UserList', userListSchema);

module.exports = UserList;