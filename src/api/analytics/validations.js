const Joi = require('joi');

exports.saveAnalyticsSchema = Joi.object().keys({
  FCPTime: Joi.number(),
  TTFBTime: Joi.number(),
  domLoadTime: Joi.number(),
  windowLoadTime: Joi.number(),
  resourceLoadTime: Joi.number(),
});

exports.getAnalyticsSchema = Joi.object().keys({
  to: Joi.date().timestamp().allow(''),
  from: Joi.date().timestamp().allow(''),
});
