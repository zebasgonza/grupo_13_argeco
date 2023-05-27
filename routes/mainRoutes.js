const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainControllers')

router.get('/', mainControllers.getIndex);
router.get('/register', mainControllers.getRegister);
router.get('/productDetail', mainControllers.getproductDetail);
router.get('/productCard', mainControllers.getproductCard);

module.exports = router;
