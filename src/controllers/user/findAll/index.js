const { StatusCodes: { OK } } = require('http-status-codes');
const { findAll } = require('../../../services/users');

module.exports = async (_req, res, next) => {
  try {
    const users = await findAll();

    return res.status(OK).json(users);
  } catch (err) {
    next(err);
  }
};
