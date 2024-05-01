const express = require('express');
const router = express.Router();

const usersControllers = require('../controllers/usersControllers');

router.get('/home',usersControllers.home);
router.get('/',usersControllers.user);
router.post('/',usersControllers.userlog);
console.log('router!!');
module.exports = router;