const express = require('express');
const loginController =require('../controllers/LoginController');

const router = express.Router();


router.post('/login', (req, res) => loginController.loginUser(req, res));

module.exports = router;
