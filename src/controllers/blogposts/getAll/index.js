const { StatusCodes: { OK } } = require('http-status-codes');
const { BlogPost, Users, Categories } = require('../../../models');

module.exports = async (_req, res, next) => {
  try {
    const result = await BlogPost.findAll({
      include: [
        { model: Users, as: 'user' },
        { model: Categories, as: 'categories', through: { attributes: [] } },
      ],
    });

    return res.status(OK).json(result);
  } catch (err) {
    next(err);
  }
};
