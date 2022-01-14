const { StatusCodes: { NOT_FOUND, OK } } = require('http-status-codes');
const { userNotFound } = require('../../../helpers');
const { findByPk } = require('../../../services/users');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await findByPk(id);

    if (!user) return res.status(NOT_FOUND).json(userNotFound);

    return res.status(OK).json(user);
  } catch (err) {
    next(err);
  }
};
