const express = require('express');
const router = express.Router();
const mainControllers = require('../back/controllers/mainControllers')

router.get('/', mainControllers.getIndex);

module.exports = router;
