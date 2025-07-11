const express = require('express')
const router = express.Router()
const upload = require('../Utils/upload');
const { jwtAuthMiddleware } = require('../Middleware/jwt');
require('../db')

const { userRegister, userLogin, dashboard, userUpdate, userDelete } = require('../Controllers/UserController');
router.post('/register', userRegister);
router.post('/login', userLogin);
router.get('/dashboard', jwtAuthMiddleware, dashboard);
router.put('/update/:id', jwtAuthMiddleware, userUpdate);
router.delete('/delete/:id', jwtAuthMiddleware, userDelete);

const { productCreate, getProducts, updateProduct, deleteProduct } = require('../Controllers/CartController');
router.post('/product/create', upload.array('productImage'), jwtAuthMiddleware, productCreate);
router.get('/allProducts', jwtAuthMiddleware, getProducts);
router.put('/product/update/:id', jwtAuthMiddleware, upload.array('productImage'), updateProduct);
router.delete('/product/delete/:id', jwtAuthMiddleware, deleteProduct);

module.exports = router