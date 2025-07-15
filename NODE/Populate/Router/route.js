const { authorCreate } = require('../Controller/authorController');
const { blogCreate } = require('../Controller/blogController');

const router = require('express').Router();
require('../db');

router.post('/author/register', authorCreate);
router.post('/blogCreate', blogCreate);

module.exports = router