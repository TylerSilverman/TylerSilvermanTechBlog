const router = require('express').Router();
const userRoute = require('./userRoute');
const dashboardRoute = require('./dashboardRoute');
const signupRoute = require('./signupRoute');

router.use('/users', userRoute);
router.use('/dashboard', dashboardRoute);
router.use('/login', signupRoute);

module.exports = router;