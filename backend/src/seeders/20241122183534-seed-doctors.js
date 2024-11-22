'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Doctors',[
      // Chuyên khoa 1: Bác sỹ gia đình
      { name: 'Nguyễn Văn Khương', specialty_id: 1, level: 'BSCKI', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nguyễn Thị Tuyết Nhung', specialty_id: 1, level: 'ThsBS', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nguyễn Trần Kiên', specialty_id: 1, level: 'ThsBS', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Cao Mạnh Long', specialty_id: 1, level: 'ThsBSNT', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 2: Da liễu
      { name: 'Nguyễn Ngọc Thanh', specialty_id: 2, level: 'ThsBNST', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Phạm Thị Thu Hương', specialty_id: 2, level: 'BSCKII', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nguyễn Hoàng Chiến', specialty_id: 2, level: 'PGS', price_service: 1000000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 3: Dinh dưỡng
      { name: 'Vũ Ngọc Hà', specialty_id: 3, level: 'ThsBSNT', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Dương Thị Phương', specialty_id: 3, level: 'BS', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bùi Thị Trà Vi', specialty_id: 3, level: 'BS', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 4: Dị ứng – Miễn dịch
      { name: 'Nguyễn Thị Vân', specialty_id: 4, level: 'PGSTS', price_service: 450000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Lê Thị Thúy Hải', specialty_id: 4, level: 'TSBSCKII', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bùi Văn Dân', specialty_id: 4, level: 'TSBS', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nguyễn Văn Đoàn', specialty_id: 4, level: 'PGSTS', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 5: Huyết học
      { name: 'Vũ Thị Minh Châu', specialty_id: 5, level: 'BSCKII', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nguyễn Chí Thành', specialty_id: 5, level: 'ThsBSNT', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Hoàng Thị Thu Thủy', specialty_id: 5, level: 'BS', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 6: Ký sinh trùng
      { name: 'Phan Thị Hương Liên', specialty_id: 6, level: 'ThsBS', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Phan Thị Hương Liên', specialty_id: 6, level: 'ThsBS', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Phạm Ngọc Minh', specialty_id: 6, level: 'PGSTS', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nguyễn Ngọc Bích', specialty_id: 6, level: 'BS', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 7: Mắt
      { name: 'Lê Thị Hồng Nhung', specialty_id: 7, level: 'TSBS', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bùi Hữu Quang', specialty_id: 7, level: 'TSBS', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Đỗ Dung Hòa', specialty_id: 7, level: 'ThsBS', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Hoàng Thanh Tùng', specialty_id: 7, level: 'BS', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 8: Nam học
      { name: 'Nguyễn Hoài Bắc', specialty_id: 8, level: 'PGSTS', price_service: 450000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Trần Văn Kiên', specialty_id: 8, level: 'BS', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nguyễn Cao Thắng', specialty_id: 8, level: 'BS', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Phạm Minh Quân', specialty_id: 8, level: 'ThsBS', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 9: Ngoại khoa
      { name: 'Hạ Hồng Cường', specialty_id: 9, level: 'BSCKII', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nguyễn Duy Thắng', specialty_id: 9, level: 'TS', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Vũ Ngọc Tú', specialty_id: 9, level: 'PGSTS', price_service: 450000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nguyễn Duy Gia', specialty_id: 9, level: 'ThsBSNT', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 10: Nhi khoa
      { name: 'Nguyễn Thị Diệu Thúy', specialty_id: 10, level: 'PGSTS', price_service: 450000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nguyễn Thị Thanh Mai', specialty_id: 10, level: 'TSBS', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Đỗ Thanh Hương', specialty_id: 10, level: 'TSBS', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Trương Văn Quý', specialty_id: 10, level: 'BSCKII', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 11: Phụ sản
      { name: 'Nguyễn Thành Khiêm', specialty_id: 11, level: 'TSBS', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Phạm Thị Thanh Hiền', specialty_id: 11, level: 'PGSTS', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Lê Thị Thanh Vân', specialty_id: 11, level: 'PGSTS', price_service: 450000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Tống Thị Hồng Duyên', specialty_id: 11, level: 'ThsBS', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 12: Răng hàm mặt
      { name: 'Trịnh Thị Thái Hà', specialty_id: 12, level: 'PGSTS', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Hoàng Việt Hải', specialty_id: 12, level: 'PGSTS', price_service: 450000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Trương Mạnh Nguyên', specialty_id: 12, level: 'TSBS', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nghiêm Chi Phương', specialty_id: 12, level: 'ThsBSNT', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },

      { name: 'Phạm Thị Bích Đào', specialty_id: 13, level: 'PGSTS', price_service: 450000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nguyễn Quang Trung', specialty_id: 13, level: 'PGS', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Phạm Trần Anh', specialty_id: 13, level: 'PGSTS', price_service: 450000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Đỗ Trung Đức', specialty_id: 13, level: 'ThsBSNT', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 14: Tiêu hóa
      { name: 'Trần Ngọc Ánh', specialty_id: 14, level: 'PGSTS', price_service: 450000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nguyễn Thị Chi', specialty_id: 14, level: 'BSCKII', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Trần Duy Hưng', specialty_id: 14, level: 'BSCKII', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Đoàn Văn Long', specialty_id: 14, level: 'GSTS', price_service: 450000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 15: Tim mạch
      { name: 'Vũ Đức Trung', specialty_id: 15, level: 'GSTS', price_service: 1000000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Lê Văn Tú', specialty_id: 15, level: 'BSCKII', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bùi Quang Thắng', specialty_id: 15, level: 'BSCKII', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nguyễn Thị Minh Lý', specialty_id: 15, level: 'TSBS', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 16: Truyền nhiễm
      { name: 'Nguyễn Danh Đức', specialty_id: 16, level: 'BSCKII', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Tạ Thị Diệu Ngân', specialty_id: 16, level: 'TS', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bá Đình Thắng', specialty_id: 16, level: 'ThsBSNT', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bùi Văn Vương', specialty_id: 16, level: 'PGSTSNT', price_service: 450000, createdAt: new Date(), updatedAt: new Date() },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Doctors', null, {});
  }
};
