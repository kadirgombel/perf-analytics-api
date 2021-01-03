// Schema should be valid Joi
exports.validate = (schema, property) => (req, res, next) => {
  const { error } = schema.validate(req[property]);

  if (!error) {
    return next();
  }
  const { details } = error;

  const errObj = {};
  details.forEach((detail) => {
    errObj[detail.context.label] = detail.message;
  });

  return res.status(400).json(errObj);
};
