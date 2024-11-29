'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Specialties', [
      {
        name: 'Bác sỹ gia đình',
        img: '/simages/bac-sy-gia-dinh.png',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Da liễu',
        img: '/simages/da-lieu.png',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Tiểu đường - Nội tiết',
        img: '/simages/tieu-duong.png',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Dị ứng - Miễn dịch',
        img: '/simages/di-ung-mien-dich.png',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Nội khoa',
        img: '/simages/noi-khoa.png',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Hô hấp - Phổi',
        img: '/simages/ho-hap-phoi.png',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mắt',
        img: '/simages/mat.png',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Nam học',
        img: '/simages/nam-hoc.png',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Thận - Tiết niệu',
        img: '/simages/than-tiet-nieu.png',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Nhi khoa',
        img: '/simages/nhi-khoa.png',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Phụ sản',
        img: '/simages/phu-san.png',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Răng hàm mặt',
        img: '/simages/rang-ham-mat.png',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Tai mũi họng',
        img: '/simages/tai-mui-hong.png',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Tiêu hóa',
        img: '/simages/tieu-hoa.png',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Tim mạch',
        img: '/simages/tim-mach.png',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Truyền nhiễm',
        img: '/simages/truyen-nhiem.png',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Specialties', null, {});
  }
};
