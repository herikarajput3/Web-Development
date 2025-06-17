const express = require('express')
const { userRegister, userFind, userLogin } = require('../Controllers/UserController');
const router = express.Router()
require('../db')

router.post('/register', userRegister);
router.post('/login', userLogin);
// router.get('/users', userFind);

module.exports = router;