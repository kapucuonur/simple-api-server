const router = require('express').Router(); 
const authContrller = require('../controller/authController');

router.post('/', authController.postUser);

module.exports = router;