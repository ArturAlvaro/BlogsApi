const { StatusCodes: { OK } } = require('http-status-codes');
const { findAll } = require('../../../services/categories');

module.exports = async (_req, res, next) => {
  try {
    const categories = await findAll();

    return res.status(OK).json(categories);
  } catch (err) {
    next(err);
  }
};
