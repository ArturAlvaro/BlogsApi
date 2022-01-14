const { StatusCodes: { BAD_REQUEST, CREATED } } = require('http-status-codes');
const schemaCategory = require('../../../schema/categories');
const { Categories } = require('../../../models');

const create = async (req, res, next) => {
  try {
    const { name } = req.body;
    const { error } = schemaCategory.validate({ name });
    if (error) return res.status(BAD_REQUEST).json({ message: error.details[0].message });

    const result = await Categories.create({ name });

    await res.status(CREATED).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = create;
