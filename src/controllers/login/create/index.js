const { StatusCodes: { OK } } = require('http-status-codes');

const create = async (req, res, next) => {
  try {
    await res.status(OK).json({ token: req.token, user: req.user });
  } catch (err) {
    next(err);
  }
};

module.exports = create;
