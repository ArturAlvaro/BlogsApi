const { Users } = require('../../../models');

const findByPk = async (id) => {
  const user = await Users.findByPk(
    id,
    {
      attributes: {
        exclude: ['password'],
      },
    },
  );

  return user;
};

module.exports = findByPk;
