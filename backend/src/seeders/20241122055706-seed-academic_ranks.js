'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('AcademicRanks', [
      { name: 'Bác sĩ Chuyên khoa I', abbreviation: 'BSCKI', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bác sĩ Chuyên khoa II', abbreviation: 'BSCKII', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Thạc sĩ, Bác sĩ', abbreviation: 'ThS.BS', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Tiến sĩ, Bác sĩ', abbreviation: 'TS.BS', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bác sĩ nội trú', abbreviation: 'BSNT', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('AcademicRanks', null, {});
  }
};
