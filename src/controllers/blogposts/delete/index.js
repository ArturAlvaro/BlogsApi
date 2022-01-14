const { StatusCodes: { NO_CONTENT } } = require('http-status-codes');
const { BlogPost } = require('../../../models');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    await BlogPost.destroy({ where: { id } });

    return res.status(NO_CONTENT).end();
  } catch (err) {
    next(err);
  }
};
