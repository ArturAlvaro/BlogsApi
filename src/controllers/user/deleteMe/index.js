const { StatusCodes: { NO_CONTENT } } = require('http-status-codes');
const { Users } = require('../../../models');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.user;

    await Users.destroy({ where: { id } });

    return res.status(NO_CONTENT).end();
  } catch (err) {
    next(err);
  }
};
