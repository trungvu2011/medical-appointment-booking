'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        doctor_id: 1,
        name: 'example',
        email: 'example@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doctor_id: 2,
        name: 'example',
        email: 'example@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
