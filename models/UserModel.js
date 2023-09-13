const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    _id : {
        type : String
    },
    name : {
        type : String
    },
    email : {
        type : String
    },
    phone : {
        type : Number
    },

},{timestamp : true})

const User = mongoose.model('User',UserSchema)

module.exports = User