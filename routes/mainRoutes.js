const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainControllers')

router.get('/', mainControllers.Index);
router.get('/register', mainControllers.Register);
router.get('/productDetail', mainControllers.productDetail);
router.get('/productCard', mainControllers.ProductCard);
router.get('/creacionProductos', mainControllers.creacionProductos);
router.get('/edicionProductos', mainControllers.edicionProductos);

module.exports = router;
