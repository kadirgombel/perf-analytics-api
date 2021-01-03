const cache = require('express-redis-cache')({
  host: process.env.REDIS_HOST || '127.0.0.1',
  port: process.env.REDIS_PORT || 7777,
  auth_pass: process.env.REDIS_PASS || undefined,
});

exports.cache = cache;
