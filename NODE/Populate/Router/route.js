const { authorCreate } = require('../Controller/authorController');
const { blogCreate, getAllBlogs } = require('../Controller/blogController');

const router = require('express').Router();
require('../db');

router.post('/author/register', authorCreate);
router.post('/blogCreate', blogCreate);
router.get('/getAllBlogs', getAllBlogs)

module.exports = router