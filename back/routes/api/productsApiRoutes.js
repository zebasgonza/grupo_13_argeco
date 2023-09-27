const express = require("express");
const path = require("path");
const router = express.Router();
const productsApiController = require('../../back/controllers/api/productsApiController');

router.get('/', productsApiController.getProducts);
router.get('/:id', productsApiController.getProductsById);


module.exports = router;