const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainControllers')

router.get('/index', mainControllers.getIndex);
router.get('/Register', mainControllers.getRegister);


module.exports = router;
