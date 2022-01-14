const { BlogPost } = require('../../../models');

module.exports = async ({ title, content, userId, published, updated }) => {
  const posts = await BlogPost.create({ title, content, userId, published, updated });

  return posts;
};
