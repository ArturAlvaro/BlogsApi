const { Categories } = require('../../../models');

const findAll = async () => {
  const categories = await Categories.findAll();

  return categories;
};

module.exports = findAll;
