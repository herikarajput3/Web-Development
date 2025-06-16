const express = require('express')
const { userCreate, userFind } = require('../Controllers/UserController');
const router = express.Router()
require('../db')

router.post('/register', userCreate);
router.get('/users', userFind);

module.exports = router;