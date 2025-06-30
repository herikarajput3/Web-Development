const express = require('express');
const { SingleImgController, update } = require('../Controller/SingleImgController');
const upload = require('../Utils/upload');
const { multiImgController, updateMultiImg } = require('../Controller/MultiImgController');
const router = express.Router();
require('../db')

router.post('/singleImg', upload.single('image'), SingleImgController)
router.put('/singleImg/:id', upload.single('image'), update)
router.post('/multiImg', upload.array('multiImg'), multiImgController)
router.put('/multiImg/:id', upload.array('multiImg'), updateMultiImg)
module.exports = router;