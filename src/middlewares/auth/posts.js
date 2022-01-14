const { StatusCodes: { BAD_REQUEST } } = require('http-status-codes');
const schemaPosts = require('../../schema/posts');

module.exports = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { title, content, categoryIds } = req.body;
    const { error } = schemaPosts.validate({
      title, content, userId, categoryIds,
    });

    if (error) return res.status(BAD_REQUEST).json({ message: error.details[0].message });
    next();
  } catch (err) {
    next(err);
  }
};
