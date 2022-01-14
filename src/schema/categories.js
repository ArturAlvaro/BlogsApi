const Joi = require('@hapi/joi');

const schemaCategory = Joi.object({
  name: Joi.string().required(),
});

module.exports = schemaCategory;
