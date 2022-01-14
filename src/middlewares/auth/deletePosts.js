const { StatusCodes: { UNAUTHORIZED, NOT_FOUND } } = require('http-status-codes');
const { BlogPost } = require('../../models');
const { unauthorizedUser, missingPost } = require('../../helpers');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { id: userId } = req.user;

    const find = await BlogPost.findByPk(id);
    if (!find) return res.status(NOT_FOUND).json(missingPost);
    if (find.dataValues.userId !== userId) return res.status(UNAUTHORIZED).json(unauthorizedUser);

    next();
  } catch (err) {
    next(err);
  }
};
