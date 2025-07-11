const express = require('express');
const { userRegister, userLogin, dashboard } = require('../Controller/userController');
const { jwtAuthMiddleware } = require('../Middleware/jwt');
const router = express.Router();
require('../db')

router.post('/register', userRegister);
router.post('/login', userLogin);
router.get('/dashboard', jwtAuthMiddleware, dashboard);

module.exports = router;