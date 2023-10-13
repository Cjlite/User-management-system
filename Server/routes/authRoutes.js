const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const addUserController = require('../controllers/addUserController');

router.post('/signup', authController.signup);
router.post('/signin', authController.signIn);
router.post('/add-user', addUserController.addUser);

module.exports = router;
