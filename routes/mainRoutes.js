const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainControllers')



router.get('/', mainControllers.getIndex);

// lo de abajo se debe cambiar
router.get('/register', mainControllers.getRegister);
router.get('/productDetail', mainControllers.getproductDetail);
router.get('/productCard', mainControllers.getproductCard);
router.get('/login', mainControllers.getLogin)
router.get('/creacionProductos', mainControllers.getcreacionProductos);
router.get('/edicionProductos', mainControllers.getedicionProductos);

module.exports = router;
