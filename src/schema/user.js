const Joi = require('@hapi/joi');

const schemaUser = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).message(
    '{#label} length must be {#limit} characters long',
  ).required(),
  image: Joi.string(),
}).messages({
  'any.empty': '{#label} is not allowed to be empty',
  'string.min': '{#label} length must be at least {#limit} characters long',
});

module.exports = schemaUser;
