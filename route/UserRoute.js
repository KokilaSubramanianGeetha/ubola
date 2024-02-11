const express = require('express');

const user_route = express();

const bodyParser = require('body-parser');
user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({extended:true}));

const userController = require('../controller/UserController');


user_route.post('/register',userController.register);
user_route.post('/login',userController.login);

module.exports = user_route;
