const { StatusCodes: { CREATED, BAD_REQUEST } } = require('http-status-codes');
const { missingCategory } = require('../../../helpers');
const { create } = require('../../../services/blogposts');
const { findByIds } = require('../../../services/blogposts');

module.exports = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { title, content, categoryIds } = req.body;

    const findCategories = await findByIds(categoryIds);
    if (categoryIds.length !== findCategories.length) {
      return res.status(BAD_REQUEST).json(missingCategory);
    }

    const result = await create({
      title, content, categoryIds, userId, published: new Date(), updated: new Date(),
    });

    return res.status(CREATED).json(result);
  } catch (err) {
    next(err);
  }
};
