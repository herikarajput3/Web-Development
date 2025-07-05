const express = require('express');
const { jwtAuthMiddleware } = require('../jwt');
const { userController, userLogin } = require('../Controllers/UserController');
const router = express.Router();
require('../db');

router.post('/register', userController);
router.post('/login', jwtAuthMiddleware, userLogin);

module.exports = router;