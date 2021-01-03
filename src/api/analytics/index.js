const { Router } = require('express');
const { saveAnalytics, getAnalytics } = require('./controller');
const { saveAnalyticsSchema, getAnalyticsSchema } = require('./validations');
const { validate } = require('../../services/validator');
const { cache } = require('../../services/redis');

const router = new Router();

router.post('/', validate(saveAnalyticsSchema, 'body'), saveAnalytics);

router.get(
  '/',
  cache.route({ expire: 5 }),
  validate(getAnalyticsSchema, 'query'),
  getAnalytics,
);

module.exports = router;
