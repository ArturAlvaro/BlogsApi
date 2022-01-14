const Joi = require('@hapi/joi');

const schemaLogin = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
}).messages({
  'any.empty': '{#label} is not allowed to be empty',
});

module.exports = schemaLogin;
