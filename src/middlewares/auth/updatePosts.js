const { StatusCodes: { UNAUTHORIZED, BAD_REQUEST, NOT_FOUND } } = require('http-status-codes');
const { cannotEditCategories, missingPost, unauthorizedUser } = require('../../helpers');
const { BlogPost } = require('../../models');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { categoryIds } = req.body;
    const { id: userId } = req.user;

    if (categoryIds) return res.status(BAD_REQUEST).json(cannotEditCategories);

    const find = await BlogPost.findByPk(id);
    if (!find) return res.status(NOT_FOUND).json(missingPost);
    if (find.dataValues.userId !== userId) return res.status(UNAUTHORIZED).json(unauthorizedUser);

    next();
  } catch (err) {
    next(err);
  }
};
