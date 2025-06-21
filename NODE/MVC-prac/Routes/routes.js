const express = require('express');
const { SingleImgController } = require('../Controller/SingleImgController');
const { userData } = require('../Controller/UserController');
const upload = require('../Utils/upload');
// const {upload} = require('../Utils/upload')

const router = express.Router();
require('../db');

router.post('/register', userData);
// router.post('/singleImg',upload.single('SingleImg'),SingleImgController)
router.post('/singleImg', upload.single('SingleImg'), SingleImgController);

module.exports = router;

