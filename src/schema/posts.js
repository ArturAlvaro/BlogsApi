const Joi = require('@hapi/joi');

const schemaPosts = Joi.object({
  title: Joi.string().required().not().empty(),
  content: Joi.string().required().not().empty(),
  userId: Joi.number().required(),
  categoryIds: Joi.array().items(Joi.number()).required(),
}).messages({
  'any.empty': '{#label} is not allowed',
});

module.exports = schemaPosts;
