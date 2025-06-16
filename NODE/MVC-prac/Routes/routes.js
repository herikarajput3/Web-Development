const express = require('express');
const { userData } = require('../Controller/UserController');

const router = express.Router();
require('../db');

router.post('/register', userData);

module.exports = router;
