const express = require("express");
const path = require("path");
const router = express.Router();
const userApiController = require('../../controllers/api/userApiController');
const productsApiController = require('../../controllers/api/productsApiController');

router.get('/', userApiController.getUsers);
router.get('/:id', productsApiController.getProductsById);


module.exports = router;