const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const allApi = require('./api');

router.use('/api', allApi);
router.use('/', homeRoutes);

module.exports = router;