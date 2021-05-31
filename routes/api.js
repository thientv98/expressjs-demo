var express = require('express');
var router = express.Router();
require('express-router-group');
const userController = require('../controllers/api/userController')
const authController = require('../controllers/api/authController')


router.get('/', function(req, res, next) {
    res.send('respond to /api');
});

router.group("/users", router => {
    router.get('/', userController.index);
    router.get('/:id', userController.show);
    router.post('/', userController.store);
});
router.group("/auth", router => {
    router.post('/register', authController.register);
    router.post('/login', authController.login);
});

module.exports = router;
