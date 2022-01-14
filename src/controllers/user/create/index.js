const { StatusCodes: { CREATED } } = require('http-status-codes');

const create = async (req, res, next) => {
  try {
    await res.status(CREATED).json({ token: req.token });
  } catch (err) {
    next(err);
  }
};

module.exports = create;
