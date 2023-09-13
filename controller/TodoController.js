const Todo = require('../models/TodoModel')
var generateSafeId = require('generate-safe-id');

const getAll = (req,res,next)=>{
    var userId = req.query.id
    console.log(userId)
    Todo.find({user : userId}).then(response => {
        res.json({
            response
        })
    }).catch(error => {
        res.json({
            message : "An Error Catched !"
        })
    })
}

const show = (req, res, next) => {
    let toDoID = req.query.id
    console.log(toDoID)
    Todo.findById(toDoID).then(respose => {
        res.json({
            respose
        })
    }).catch(error => {
        res.json({
            massage : "An Error Catched !"
        })
    })
}


const store = (req, res, next) => {
    var id = generateSafeId();
        let toDoInfo = new Todo({
            _id : id,
            user : req.body.userId ,
            dateToDo : req.body.data ,
            content : req.body.content
        })
        toDoInfo.save().then(respose => {
            res.json({
                massage : "To Do Added Successfully !"
            })
        }).catch(error => {
            res.json({
                massage : "An Error Catched !"
            })
        })
}

// Update User Info

const update = (req, res, next) => {
    let toDoID = req.body.id

    let toDoInfo = {
        user : req.body.userId ,
        content : req.body.content,
        dateToDo : req.body.data 
    }

    Todo.findOneAndUpdate(toDoID,{$set : toDoInfo}).then(respose => {
        res.json({
            massage : "To Do Updated Successfully !"
        })
    }).catch(error => {
        res.json({
            massage : "An Error Catched !"
        })
    })
}

// Delete An User

const destroy = (req, res, next) => {
    let toDoID = req.body.id

    Todo.findByIdAndRemove(toDoID).then(respose => {
        res.json({
            massage : "One To Do Deleted Successfully !"
        })
    }).catch(error => {
        res.json({
            massage : "An Error Catched !"
        })
    })
}

const destroyAll = (req, res, next) => {
    let userID = req.body.id

    Todo.deleteMany({user : userID}).then(respose => {
        res.json({
            massage : "All To Do Deleted Successfully !"
        })
    }).catch(error => {
        res.json({
            massage : "An Error Catched !"
        })
    })
}

module.exports = {
    getAll , show , store , update , destroy , destroyAll
}