'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Specialties',[
      {
        name: 'Bác sỹ gia đình',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name: 'Da liễu',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name: 'Dinh Dưỡng',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name: 'Dị ứng - Miễn dịch',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name: 'Huyết học',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name: 'Ký sinh trùng',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name: 'Mắt',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name: 'Nam học',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name: 'Ngoại khoa',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name: 'Nhi khoa',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name: 'Phụ sản',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name: 'Răng hàm mặt',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name: 'Tai mũi họng',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name: 'Tiêu hóa',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name: 'Tim mạch',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name: 'Truyền nhiễm',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
    ])
    
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Specialties', null, {});
  }
};
