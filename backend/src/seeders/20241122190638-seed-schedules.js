'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Schedules', [
      {work_day: 'Thứ hai', start_time: '06:30:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ hai', start_time: '07:00:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ hai', start_time: '07:30:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ hai', start_time: '08:00:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ hai', start_time: '13:30:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ hai', start_time: '14:00:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ hai', start_time: '14:30:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ hai', start_time: '15:00:00', createdAt: new Date(), updatedAt: new Date()},

      {work_day: 'Thứ ba', start_time: '06:30:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ ba', start_time: '07:00:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ ba', start_time: '07:30:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ ba', start_time: '08:00:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ ba', start_time: '13:30:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ ba', start_time: '14:00:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ ba', start_time: '14:30:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ ba', start_time: '15:00:00', createdAt: new Date(), updatedAt: new Date()},

      {work_day: 'Thứ tư', start_time: '06:30:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ tư', start_time: '07:00:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ tư', start_time: '07:30:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ tư', start_time: '08:00:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ tư', start_time: '13:30:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ tư', start_time: '14:00:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ tư', start_time: '14:30:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ tư', start_time: '15:00:00', createdAt: new Date(), updatedAt: new Date()},

      {work_day: 'Thứ năm', start_time: '06:30:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ năm', start_time: '07:00:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ năm', start_time: '07:30:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ năm', start_time: '08:00:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ năm', start_time: '13:30:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ năm', start_time: '14:00:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ năm', start_time: '14:30:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ năm', start_time: '15:00:00', createdAt: new Date(), updatedAt: new Date()},

      {work_day: 'Thứ sáu', start_time: '06:30:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ sáu', start_time: '07:00:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ sáu', start_time: '07:30:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ sáu', start_time: '08:00:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ sáu', start_time: '13:30:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ sáu', start_time: '14:00:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ sáu', start_time: '14:30:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ sáu', start_time: '15:00:00', createdAt: new Date(), updatedAt: new Date()},

      {work_day: 'Thứ bảy', start_time: '06:30:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ bảy', start_time: '07:00:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ bảy', start_time: '07:30:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ bảy', start_time: '08:00:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ bảy', start_time: '13:30:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ bảy', start_time: '14:00:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ bảy', start_time: '14:30:00', createdAt: new Date(), updatedAt: new Date()},
      {work_day: 'Thứ bảy', start_time: '15:00:00', createdAt: new Date(), updatedAt: new Date()}
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Schedules', null, {});
  }
};
