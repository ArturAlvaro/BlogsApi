const { BlogPost, Categories } = require('../../../models');

module.exports = async ({ id, title, content }) => {
  await BlogPost.update({ title, content }, { where: { id } });

  const result = await BlogPost.findByPk(id, {
    include: {
      model: Categories, as: 'categories', through: { attributes: [] },
    },
  });

  return result;
};
