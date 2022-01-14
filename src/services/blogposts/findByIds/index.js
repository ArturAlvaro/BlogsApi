const { Op } = require('sequelize');
const { Categories } = require('../../../models');

module.exports = async (categoryIds) => {
  const result = await Categories.findAll({
    where: {
      id: {
        [Op.in]: categoryIds,
      },
    },
  });

  return result;
};
