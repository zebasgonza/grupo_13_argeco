const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainControllers')

router.get('/index', mainControllers.getIndex);


module.exports = router;
