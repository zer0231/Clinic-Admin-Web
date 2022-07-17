const {Router} = require('express');
const homeController = require('../controllers/homeController');
const loginController = require('../controllers/loginController');
const dashboardController = require('../controllers/dashboardController');
const router = Router();

router.get('/',homeController.home_get);
router.get('/login',loginController.login_get);
router.post('/login',loginController.login_post);
router.get('/reset-password',loginController.reset_password);

router.get('/dashboard',dashboardController.dashboard_get);

module.exports = router; //exporting routes