var express = require('express');
var router = express.Router();

const loginController = require('../controllers/loginController');
const dashboardController = require('../controllers/dashboardController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/login',loginController.login_get);
router.post('/login',loginController.login_post);
router.get('/reset-password',loginController.reset_password);

router.get('/dashboard',dashboardController.dashboard_get);

router.get('/logout',loginController.logout_get);
module.exports = router;
