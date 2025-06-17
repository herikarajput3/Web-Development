const express = require('express')
const { userRegister, userFind, userLogin, getParticularUser, deleteUser, updateUser } = require('../Controllers/UserController');
const router = express.Router()
require('../db')

router.post('/register', userRegister);
router.post('/login', userLogin);
router.get('/users', userFind);
router.get('/getParticularUser/:id',getParticularUser);
router.delete('/deleteUser/:id',deleteUser);
router.put('/updateUser/:id',updateUser);

module.exports = router;