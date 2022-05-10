const { StatusCodes: { CREATED } } = require('http-status-codes');
const { create } = require('../../../services/blogposts');

module.exports = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { title, content } = req.body;

    const result = await create({
      title, content, userId, published: new Date(), updated: new Date(),
    });

    return res.status(CREATED).json(result);
  } catch (err) {
    next(err);
  }
};
