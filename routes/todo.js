var express = require('express');
var router = express.Router();
const ToDoController = require("../controller/TodoController")

const { MongoClient } = require("mongodb");


router.get('/get/all',ToDoController.getAll);

router.get('/show',ToDoController.show);

router.post('/store',ToDoController.store);

router.post('/update',ToDoController.update);

router.post('/delete/one',ToDoController.destroy);

router.post('/delete/all',ToDoController.destroyAll);

module.exports = router;
