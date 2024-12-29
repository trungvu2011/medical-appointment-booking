'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Doctor_Schedule', [
      { doctor_id: 1, schedule_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 7, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 8, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 9, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 10, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 11, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 12, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 13, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 14, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 15, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 16, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 17, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 18, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 19, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 20, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 21, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 22, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 23, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 24, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 25, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 26, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 27, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 28, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 29, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 30, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 31, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 32, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 33, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 34, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 35, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 36, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 37, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 38, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 39, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 40, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 41, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 42, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 43, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 44, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 45, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 46, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 47, createdAt: new Date(), updatedAt: new Date() },
      { doctor_id: 1, schedule_id: 48, createdAt: new Date(), updatedAt: new Date() },

      ...Array.from({ length: 38 }, (_, i) => (
        Array.from({ length: 48 }, (_, j) => ({
          doctor_id: i + 2,
          schedule_id: j + 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }))
      )).flat()

    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Doctor_Schedule', null, {})
  }
};
