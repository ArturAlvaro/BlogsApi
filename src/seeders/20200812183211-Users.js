module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Users',
      [{
        id: 1,
        displayName: 'Amy Hamilton',
        email: 'amyhamilton@gmail.com',
        password: '123456',
        image: 'http://localhost:3000/images/woman.png',
      },
      {
        id: 2,
        displayName: 'Michael Schopenhauer',
        email: 'michaelschopenhauer@gmail.com',
        password: '123456',
        image: 'http://localhost:3000/images/man.png',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
