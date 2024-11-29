'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Doctors', [
      // Chuyên khoa 1: Bác sỹ gia đình
      { name: 'Nguyễn Văn Khương', specialty_id: 1, level: 'BSCKI', img: '/dimages/bs-nguyen-van-khuong.jpg', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nguyễn Thị Tuyết Nhung', specialty_id: 1, level: 'ThsBS', img: '/dimages/bs-nguyen-thi-tuyet-nhung.jpg', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nguyễn Trần Kiên', specialty_id: 1, level: 'ThsBS', img: '/dimages/bs-nguyen-tran-kien.jpg', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Cao Mạnh Long', specialty_id: 1, level: 'ThsBSNT', img: '/dimages/bs-cao-manh-long.jpg', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 2: Da liễu
      { name: 'Vũ Thái Hà', specialty_id: 2, level: 'TSBS', img: '/dimages/bac-si-vu-thai-ha.jpg', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nguyễn Tiến Thành', specialty_id: 2, level: 'BSCKII', img: '/dimages/bs-thanh.png', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nguyễn Hoàng Chiến', specialty_id: 2, level: 'PGS', img: '/dimages/bs-nguyen-hoang-chien.jpg', price_service: 1000000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 3: Tiểu đường - Nội tiết
      { name: 'Nguyễn Văn Nghị', specialty_id: 3, level: 'ThsBS', img: '/dimages/bsi-nguyen-van-nghi.png', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nguyễn Huy Cường', specialty_id: 3, level: 'ThsBS', img: '/dimages/ths-nguyen-huy-cuong.jpg', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bùi Thị Trà Vi', specialty_id: 3, level: 'BS', img: '/dimages/bs-bui-thi-tra-vi.jpg', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 4: Dị ứng – Miễn dịch
      { name: 'Nguyễn Thị Vân', specialty_id: 4, level: 'PGSTS', img: '/dimages/bs-nguyen-thi-van.jpg', price_service: 450000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bùi Văn Khánh', specialty_id: 4, level: 'TSBSCKII', img: '/dimages/bs-bui-van-khanh.jpg', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 5: Nội khoa
      { name: 'Vũ Thị Minh Châu', specialty_id: 5, level: 'BSCKII', img: '/dimages/bs-vu-thi-minh-chau.jpg', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nguyễn Chí Thành', specialty_id: 5, level: 'ThsBSNT', img: '/dimages/bs-nguyen-chi-thanh.jpg', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 6: Hô hấp - Phổi
      { name: 'Phan Thị Hương Liên', specialty_id: 6, level: 'ThsBS', img: '/dimages/bs-nguyen-chi-thanh.jpg', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Phan Thị Hương Liên', specialty_id: 6, level: 'ThsBS', img: '/dimages/bs-nguyen-chi-thanh.jpg', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 7: Mắt
      { name: 'Lê Thị Hồng Nhung', specialty_id: 7, level: 'TSBS', img: '/dimages/bs-le-thi-hong-nhung.jpg', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bùi Hữu Quang', specialty_id: 7, level: 'TSBS', img: '/dimages/bs-bui-huu-quang.jpg', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 8: Nam học
      { name: 'Nguyễn Hoài Bắc', specialty_id: 8, level: 'PGSTS', img: '/dimages/bs-nguyen-hoai-bac.jpg', price_service: 450000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Trần Văn Kiên', specialty_id: 8, level: 'BS', img: '/dimages/bs-tran-van-kien.jpg', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 9: Thận - Tiết niệu
      { name: 'Hạ Hồng Cường', specialty_id: 9, level: 'BSCKII', img: '/dimages/bs-ha-hong-cuong.jpg', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nguyễn Duy Thắng', specialty_id: 9, level: 'TS', img: '/dimages/bs-nguyen-duy-thang.jpg', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 10: Nhi khoa
      { name: 'Nguyễn Thị Diệu Thúy', specialty_id: 10, level: 'PGSTS', img: '/dimages/bs-nguyen-thi-dieu-thuy.jpg', price_service: 450000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nguyễn Thị Thanh Mai', specialty_id: 10, level: 'TSBS', img: '/dimages/bs-nguyen-thi-thanh-mai.jpg', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 11: Phụ sản
      { name: 'Nguyễn Thành Khiêm', specialty_id: 11, level: 'TSBS', img: '/dimages/bs-nguyen-thanh-khiem.jpg', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Tống Thị Hồng Duyên', specialty_id: 11, level: 'ThsBS', img: '/dimages/bs-tong-thi-hong-duyen.jpg', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 12: Răng hàm mặt
      { name: 'Trịnh Thị Thái Hà', specialty_id: 12, level: 'PGSTS', img: '/dimages/bs-trinh-thi-thai-ha.jpg', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nghiêm Chi Phương', specialty_id: 12, level: 'ThsBSNT', img: '/dimages/bs-nghiem-chi-phuong.jpg', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 13: Tai mũi họng
      { name: 'Phạm Thị Bích Đào', specialty_id: 13, level: 'PGSTS', img: '/dimages/bs-pham-thi-bich-dao.jpg', price_service: 450000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nguyễn Quang Trung', specialty_id: 13, level: 'PGS', img: '/dimages/bs-nguyen-quang-trung.jpg', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 14: Tiêu hóa
      { name: 'Trần Ngọc Ánh', specialty_id: 14, level: 'PGSTS', img: '/dimages/bs-tran-ngoc-anh.jpg', price_service: 450000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nguyễn Thị Chi', specialty_id: 14, level: 'BSCKII', img: '/dimages/bs-nguyen-thi-chi.jpg', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 15: Tim mạch
      { name: 'Vũ Đức Trung', specialty_id: 15, level: 'GSTS', img: '/dimages/bs-vu-duc-trung.jpg', price_service: 1000000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Lê Văn Tú', specialty_id: 15, level: 'BSCKII', img: '/dimages/bs-le-van-tu.jpg', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 16: Truyền nhiễm
      { name: 'Nguyễn Danh Đức', specialty_id: 16, level: 'BSCKII', img: '/dimages/bs-nguyen-danh-duc.jpg', price_service: 120000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Tạ Thị Diệu Ngân', specialty_id: 16, level: 'TS', img: '/dimages/bs-ta-thi-dieu-ngan.jpg', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Doctors', null, {});
  }
};
