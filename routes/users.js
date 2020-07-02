var express = require('express');
var router = express.Router();
//import controllers
var userController = require('../controllers/userController');

router.get('/', userController.getUsers);

router.post('/', userController.addUser);

router.get('/byId',userController.getUserById);

module.exports = router;
