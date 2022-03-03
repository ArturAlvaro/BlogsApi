module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Users',
      [{
        id: 1,
        displayName: 'Amy Hamilton',
        email: 'amyhamilton@gmail.com',
        password: '123456',
        image: 'https://cdn-icons.flaticon.com/png/512/706/premium/706807.png?token=exp=1646319495~hmac=c38685f6ed6d97e2b95340a29281870e',
      },
      {
        id: 2,
        displayName: 'Michael Schopenhauer',
        email: 'michaelschopenhauer@gmail.com',
        password: '123456',
        image: 'https://cdn-icons.flaticon.com/png/512/706/premium/706807.png?token=exp=1646319495~hmac=c38685f6ed6d97e2b95340a29281870e',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
