const router = require('express').Router();
const allApi = require('./api');
const homeRoutes = require('./homeRoutes.js');
const signUpRoutes = require('./api/signupRoute');
const blogCreate = require('./api/blogCreate');
// const { route } = require('./api/blogCreate');

router.use('/', homeRoutes);
router.use('/api', allApi);
router.use('/', signUpRoutes);
router.use('/', blogCreate);



module.exports = router;