const { StatusCodes: { OK, BAD_REQUEST } } = require('http-status-codes');
const { update } = require('../../../services/blogposts');
const schemaPosts = require('../../../schema/updatePosts');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const { error } = schemaPosts.validate({ title, content });
    if (error) return res.status(BAD_REQUEST).json({ message: error.details[0].message });

    const result = await update({ id, title, content });

    return res.status(OK).json(result);
  } catch (err) {
    next(err);
  }
};
