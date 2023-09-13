const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TodoSchema = new Schema({
    _id : {
        type : String
    },
    user : {
        type : String
    },
    content : {
        type : String
    },
    dateToDo : {
        type : String
    },

},{timestamp : true})

const Todo = mongoose.model('Todo',TodoSchema)

module.exports = Todo