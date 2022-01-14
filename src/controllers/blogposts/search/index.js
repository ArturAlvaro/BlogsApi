const { StatusCodes: { OK } } = require('http-status-codes');
const { search } = require('../../../services/blogposts');

module.exports = async (req, res, next) => {
  try {
    const { q } = req.query;

    const result = await search(q);

    return res.status(OK).json(result);
  } catch (err) {
    next(err);
  }
};
