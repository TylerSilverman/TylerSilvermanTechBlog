const router = require('express').Router();
const allApi = require('./api');
const homeRoutes = require('./homeRoutes.js');
const signUpRoutes = require('./api/signupRoute')

router.use('/', homeRoutes);
router.use('/api', allApi);
router.use('/', signUpRoutes);



module.exports = router;