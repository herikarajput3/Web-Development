const express = require('express')
const { userRegister, userFind, userLogin, getParticularUser, deleteUser, updateUser } = require('../Controllers/UserController');
const upload = require('../Utils/upload');
const { ImageController } = require('../Controllers/ImgController');
const { MultiImgController } = require('../Controllers/MultiImgController');
const router = express.Router()
require('../db')

router.post('/register', userRegister);
router.post('/login', userLogin);
router.get('/users', userFind);
router.get('/getParticularUser/:id',getParticularUser);
router.delete('/deleteUser/:id',deleteUser);
router.put('/updateUser/:id',updateUser);
router.post('/image', upload.single('image'),ImageController);
router.post('/multiImg',upload.array('multiImage'),MultiImgController);

module.exports = router;