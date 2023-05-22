const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainControllers')

router.get('/index', mainControllers.getIndex);
router.get('/register', mainControllers.getRegister);
router.get('/productDetail', mainControllers.getDetail);
router.get('/productCard', mainControllers.getProductCard);

module.exports = router;
