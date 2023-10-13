const express = require('express');
const router = express.Router();
const userController = require('../controllers/addUserController');

router.post('/add-user', userController.addUser);
router.get('/get-user', userController.getBook);
router.delete('/delete-user/:userId', userController.deleteUser);

module.exports = router;
