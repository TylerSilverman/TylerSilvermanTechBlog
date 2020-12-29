const router = require('express').Router();
const allApi = require('./api');
const homeRoutes = require('./homeRoutes.js');


router.use('/', homeRoutes);
router.use('/api', allApi);


module.exports = router;