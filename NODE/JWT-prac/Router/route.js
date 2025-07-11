const express = require('express');
const { userRegister } = require('../Controllers/userController');
const router = express.Router();
require('../db')

router.post('/register', userRegister);

module.exports = router;