const express = require("express");
const path = require("path");
const router = express.Router();
const userApiController = require('../../controllers/api/userApiController');


router.get('/', userApiController.getUsers);
router.get('/image/:id', userApiController.getUserImgById);
router.get('/:id', userApiController.getUserById);



module.exports = router;