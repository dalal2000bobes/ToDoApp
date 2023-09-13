const User = require("../models/UserModel");
var generateSafeId = require('generate-safe-id');

// Show The List Of User

const index = (req, res, next) => {
    User.find().then(respose => {
        res.json({
            respose
        })
    }).catch(error => {
        res.json({
            massage : "An Error Catched !"
        })
    })
}

// Show Info Of User

const show = (req, res, next) => {
    let userID = req.body.userID

    User.findById(userID).then(respose => {
        res.json({
            respose
        })
    }).catch(error => {
        res.json({
            massage : "An Error Catched !"
        })
    })
}

// Add User To Database

const store = (req, res, next) => {
    var id = generateSafeId();
    User.find({where : {email : req.body.email}}).then(response => {
        if(response.length == 0){
            let userInfo = new User({
                _id : id,
                name : req.body.name ,
                email : req.body.email ,
                phone : req.body.phone
            })
            userInfo.save().then(respose => {
                res.json({
                    massage : "User Email Added Successfully !"
                })
            }).catch(error => {
                res.json({
                    massage : "An Error Catched !"
                })
            })
        }else{
            res.json({
                message : "User is already Exiting !"
            })
        }
    }).catch(error => {
        res.json({
            message : "An Error Catched !"
        })
    })
}

// Update User Info

const update = (req, res, next) => {
    let userID = req.body.userID

    let userInfo = {
        name : req.body.name ,
        email : req.body.email ,
        phone : req.body.phone
    }

    User.findByIdAndUpdate(userID,{$set : userInfo}).then(respose => {
        res.json({
            massage : "User Updated Successfully !"
        })
    }).catch(error => {
        res.json({
            massage : "An Error Catched !"
        })
    })
}

// Delete An User

const destroy = (req, res, next) => {
    let userID = req.body.userID

    User.findByIdAndRemove(userID).then(respose => {
        res.json({
            massage : "User Deleted Successfully !"
        })
    }).catch(error => {
        res.json({
            massage : "An Error Catched !"
        })
    })
}

module.exports = {
    index , show , store , update , destroy
}