const express = require('express')
const router = express.Router()
const upload = require('../Utils/upload');
require('../db')

const { userRegister } = require('../Controllers/UserController');
router.post('/register', userRegister);

const { productCreate } = require('../Controllers/CartController');
router.post('/product/create', upload.array('productImage'), productCreate);

module.exports = router