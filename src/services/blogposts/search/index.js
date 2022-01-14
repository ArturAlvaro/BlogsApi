const { Op } = require('sequelize');
const { BlogPost, Users, Categories } = require('../../../models');

module.exports = async (query) => {
  const searchPost = await BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.substring]: `${query}` } },
        { content: { [Op.substring]: `${query}` } },
      ],
    },
    include: [
      { model: Users, as: 'user' },
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ],
  });

  return searchPost;
};
