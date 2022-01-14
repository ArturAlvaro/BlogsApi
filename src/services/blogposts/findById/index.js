const { BlogPost, Users, Categories } = require('../../../models');

module.exports = async (id) => {
  const result = await BlogPost.findByPk(id, {
    include: [
      { model: Users, as: 'user' },
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ],
  });

  return result;
};
