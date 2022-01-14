const Joi = require('@hapi/joi');

const schemaPosts = Joi.object({
  title: Joi.string().required().not().empty(),
  content: Joi.string().required().not().empty(),
}).messages({
  'any.empty': '{#label} is not allowed',
});

module.exports = schemaPosts;
