'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Schedules', [
      { work_day: 'Thứ 2', start_time: '06:30', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 2', start_time: '07:00', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 2', start_time: '07:30', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 2', start_time: '08:00', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 2', start_time: '13:30', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 2', start_time: '14:00', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 2', start_time: '14:30', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 2', start_time: '15:00', createdAt: new Date(), updatedAt: new Date() },

      { work_day: 'Thứ 3', start_time: '06:30', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 3', start_time: '07:00', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 3', start_time: '07:30', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 3', start_time: '08:00', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 3', start_time: '13:30', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 3', start_time: '14:00', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 3', start_time: '14:30', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 3', start_time: '15:00', createdAt: new Date(), updatedAt: new Date() },

      { work_day: 'Thứ 4', start_time: '06:30', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 4', start_time: '07:00', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 4', start_time: '07:30', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 4', start_time: '08:00', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 4', start_time: '13:30', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 4', start_time: '14:00', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 4', start_time: '14:30', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 4', start_time: '15:00', createdAt: new Date(), updatedAt: new Date() },

      { work_day: 'Thứ 5', start_time: '06:30', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 5', start_time: '07:00', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 5', start_time: '07:30', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 5', start_time: '08:00', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 5', start_time: '13:30', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 5', start_time: '14:00', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 5', start_time: '14:30', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 5', start_time: '15:00', createdAt: new Date(), updatedAt: new Date() },

      { work_day: 'Thứ 6', start_time: '06:30', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 6', start_time: '07:00', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 6', start_time: '07:30', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 6', start_time: '08:00', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 6', start_time: '13:30', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 6', start_time: '14:00', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 6', start_time: '14:30', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 6', start_time: '15:00', createdAt: new Date(), updatedAt: new Date() },

      { work_day: 'Thứ 7', start_time: '06:30', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 7', start_time: '07:00', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 7', start_time: '07:30', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 7', start_time: '08:00', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 7', start_time: '13:30', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 7', start_time: '14:00', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 7', start_time: '14:30', createdAt: new Date(), updatedAt: new Date() },
      { work_day: 'Thứ 7', start_time: '15:00', createdAt: new Date(), updatedAt: new Date() }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Schedules', null, {});
  }
};
