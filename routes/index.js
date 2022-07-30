var express = require('express');
var router = express.Router();

const loginController = require('../controllers/loginController');
const dashboardController = require('../controllers/dashboardController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/login',loginController.login_get);
router.post('/login',loginController.login_post);
router.get('/reset-password',loginController.reset_password);

router.get('/dashboard',dashboardController.dashboard_get);

router.get('/logout',loginController.logout_get);

module.exports = router;
