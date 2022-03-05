module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Users',
      [{
        id: 1,
        displayName: 'Amy Hamilton',
        email: 'amyhamilton@gmail.com',
        password: '123456',
        image: 'https://raw.githubusercontent.com/ArturAlvaro/BlogsApi/34bacc1cebf4723cc5c925dab2e3a3a3ef23850c/images/woman.png',
      },
      {
        id: 2,
        displayName: 'Michael Schopenhauer',
        email: 'michaelschopenhauer@gmail.com',
        password: '123456',
        image: 'https://raw.githubusercontent.com/ArturAlvaro/BlogsApi/34bacc1cebf4723cc5c925dab2e3a3a3ef23850c/images/man%20.png',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
