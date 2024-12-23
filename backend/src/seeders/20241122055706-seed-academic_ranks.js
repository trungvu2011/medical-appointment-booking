'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('AcademicRanks', [
      { name: 'Giáo sư', abbreviation: 'GS', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Phó giáo sư', abbreviation: 'PGS', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('AcademicRanks', null, {});
  }
};
