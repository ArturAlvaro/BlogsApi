const { Users } = require('../../../models');

const findAll = async () => {
  const users = await Users.findAll({ attributes: ['id', 'displayName', 'email', 'image'] });

  return users;
};

module.exports = findAll;
