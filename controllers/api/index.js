const router = require('express').Router();
const userRoute = require('./userRoute');
const dashboardRoute = require('./dashboardRoute');
const signupRoute = require('./signupRoute');
const blogCreate =require('./blogCreate');

router.use('/users', userRoute);
router.use('/dashboard', dashboardRoute);
router.use('/', signupRoute);
router.use('/blogCreate', blogCreate);

module.exports = router;