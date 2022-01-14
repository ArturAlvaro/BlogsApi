const { StatusCodes: { NOT_FOUND, OK } } = require('http-status-codes');
const { missingPost } = require('../../../helpers');
const { findById } = require('../../../services/blogposts');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await findById(id);
    if (!result) return res.status(NOT_FOUND).json(missingPost);

    return res.status(OK).json(result);
  } catch (err) {
    next(err);
  }
};
