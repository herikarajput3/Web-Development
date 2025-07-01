const express = require('express');
const { userRegister, userLogin, logOut, getUser, getAllUsers } = require('../Controller/UserController');
const router = express.Router();

require('../db');

router.post('/register', userRegister);
router.post('/login', userLogin);
router.get('/logout', logOut);
router.get('/user', getUser);
router.get('/users', getAllUsers);

module.exports = router;