'use strict';
const bcrypt = require("bcrypt")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const salt = bcrypt.genSaltSync(10);
    const password = bcrypt.hashSync("123456", salt)
    await queryInterface.bulkInsert('Users', [{
      name: 'User1',
      email: 'user1@gmail.com',
      password: password,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
