var express = require('express');
var router = express.Router();
const UserController = require("../controller/UserController")

const { MongoClient } = require("mongodb");


router.get('/',UserController.index);

router.post('/show',UserController.show);

router.post('/store',UserController.store);

router.post('/update',UserController.update);

router.post('/delete',UserController.destroy);



module.exports = router;
