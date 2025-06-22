const express = require('express');
const { SingleImgController } = require('../Controller/SingleImgController');
const upload = require('../Utils/upload');
const { multiImgController } = require('../Controller/MultiImgController');
const router = express.Router();
require('../db')

router.post('/singleImg', upload.single('image'), SingleImgController)
router.post('/multiImg', upload.array('multiImg'), multiImgController)
module.exports = router;