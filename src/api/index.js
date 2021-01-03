const { Router } = require('express');
const user = require('./analytics');

const router = new Router();

router.use('/analytics', user);

module.exports = router;
