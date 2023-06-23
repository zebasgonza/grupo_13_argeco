const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainControllers')

router.get('/', mainControllers.getIndex);
// router.get('/register', mainControllers.getRegister);
// router.get('/login', mainControllers.getLogin);

module.exports = router;
