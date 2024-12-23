'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Doctors', [
      // Chuyên khoa 1: Bác sỹ gia đình
      { name: 'Nguyễn Văn Khương', specialty_id: 1, academic_rank_id: null, degree_id: 1, img: '/dimages/bs-nguyen-van-khuong.jpg', price_service: 200000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nguyễn Thị Tuyết Nhung', specialty_id: 1, academic_rank_id: null, degree_id: 3, img: '/dimages/bs-nguyen-thi-tuyet-nhung.jpg', price_service: 200000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nguyễn Trần Kiên', specialty_id: 1, academic_rank_id: null, degree_id: 3, img: '/dimages/bs-nguyen-tran-kien.jpg', price_service: 200000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Cao Mạnh Long', specialty_id: 1, academic_rank_id: null, degree_id: 5, img: '/dimages/bs-cao-manh-long.jpg', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 2: Da liễu
      { name: 'Vũ Thái Hà', specialty_id: 2, academic_rank_id: null, degree_id: 4, img: '/dimages/bac-si-vu-thai-ha.jpg', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nguyễn Tiến Thành', specialty_id: 2, academic_rank_id: null, degree_id: 2, img: '/dimages/bs-thanh.png', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Đỗ Anh Vũ', specialty_id: 2, academic_rank_id: null, degree_id: 4, img: '/dimages/bs-do-anh-vu.jpg', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nguyễn Hoàng Chiến', specialty_id: 2, academic_rank_id: 1, degree_id: 4, img: '/dimages/bs-nguyen-hoang-chien.jpg', price_service: 500000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 3: Tiểu đường - Nội tiết
      { name: 'Nguyễn Văn Nghị', specialty_id: 3, academic_rank_id: null, degree_id: 3, img: '/dimages/bsi-nguyen-van-nghi.png', price_service: 200000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nguyễn Huy Cường', specialty_id: 3, academic_rank_id: null, degree_id: 3, img: '/dimages/ths-nguyen-huy-cuong.jpg', price_service: 200000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bùi Thị Trà Vi', specialty_id: 3, academic_rank_id: null, degree_id: 3, img: '/dimages/bs-bui-thi-tra-vi.jpg', price_service: 200000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nguyễn Mạnh Hòa', specialty_id: 3, academic_rank_id: null, degree_id: 1, img: '/dimages/bs-nguyen-manh-hoa.jpg', price_service: 200000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 4: Dị ứng – Miễn dịch
      { name: 'Nguyễn Thị Vân', specialty_id: 4, academic_rank_id: 2, degree_id: 4, img: '/dimages/bs-nguyen-thi-van.jpg', price_service: 400000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bùi Văn Khánh', specialty_id: 4, academic_rank_id: null, degree_id: 2, img: '/dimages/bs-bui-van-khanh.jpg', price_service: 200000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Lê Thị Tuyết Lan', specialty_id: 4, academic_rank_id: 2, degree_id: 4, img: '/dimages/bs-le-thi-tuyet-lan.jpg', price_service: 400000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 5: Nội khoa
      { name: 'Vũ Thị Minh Châu', specialty_id: 5, academic_rank_id: null, degree_id: 2, img: '/dimages/bs-vu-thi-minh-chau.jpg', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nguyễn Chí Thành', specialty_id: 5, academic_rank_id: null, degree_id: 5, img: '/dimages/bs-nguyen-chi-thanh.jpg', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 6: Hô hấp - Phổi
      { name: 'Hoàng Chân Phương', specialty_id: 6, academic_rank_id: null, degree_id: 3, img: '/dimages/bs-hoang-chan-phuong.jpg', price_service: 200000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Dương Anh Phượng', specialty_id: 6, academic_rank_id: null, degree_id: 3, img: '/dimages/bs-duong-anh-phuong.jpg', price_service: 200000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 7: Mắt
      { name: 'Lê Thị Hồng Nhung', specialty_id: 7, academic_rank_id: null, degree_id: 4, img: '/dimages/bs-le-thi-hong-nhung.jpg', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bùi Hữu Quang', specialty_id: 7, academic_rank_id: null, degree_id: 4, img: '/dimages/bs-bui-huu-quang.jpg', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 8: Nam học
      { name: 'Nguyễn Hoài Bắc', specialty_id: 8, academic_rank_id: 2, degree_id: 4, img: '/dimages/bs-nguyen-hoai-bac.jpg', price_service: 400000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Trần Văn Kiên', specialty_id: 8, academic_rank_id: null, degree_id: 3, img: '/dimages/bs-tran-van-kien.jpg', price_service: 200000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 9: Thận - Tiết niệu
      { name: 'Hạ Hồng Cường', specialty_id: 9, academic_rank_id: null, degree_id: 2, img: '/dimages/bs-ha-hong-cuong.jpg', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nguyễn Duy Thắng', specialty_id: 9, academic_rank_id: null, degree_id: 4, img: '/dimages/bs-nguyen-duy-thang.jpg', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 10: Nhi khoa
      { name: 'Nguyễn Thị Diệu Thúy', specialty_id: 10, academic_rank_id: 2, degree_id: 4, img: '/dimages/bs-nguyen-thi-dieu-thuy.jpg', price_service: 400000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nguyễn Thị Thanh Mai', specialty_id: 10, academic_rank_id: null, degree_id: 4, img: '/dimages/bs-nguyen-thi-thanh-mai.jpg', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 11: Phụ sản
      { name: 'Nguyễn Thành Khiêm', specialty_id: 11, academic_rank_id: null, degree_id: 4, img: '/dimages/bs-nguyen-thanh-khiem.jpg', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Tống Thị Hồng Duyên', specialty_id: 11, academic_rank_id: null, degree_id: 3, img: '/dimages/bs-tong-thi-hong-duyen.jpg', price_service: 200000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 12: Răng hàm mặt
      { name: 'Trịnh Thị Thái Hà', specialty_id: 12, academic_rank_id: 2, degree_id: 4, img: '/dimages/bs-trinh-thi-thai-ha.jpg', price_service: 400000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nghiêm Chi Phương', specialty_id: 12, academic_rank_id: null, degree_id: 5, img: '/dimages/bs-nghiem-chi-phuong.jpg', price_service: 200000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 13: Tai mũi họng
      { name: 'Phạm Thị Bích Đào', specialty_id: 13, academic_rank_id: 2, degree_id: 4, img: '/dimages/bs-pham-thi-bich-dao.jpg', price_service: 400000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nguyễn Quang Trung', specialty_id: 13, academic_rank_id: 1, degree_id: null, img: '/dimages/bs-nguyen-quang-trung.jpg', price_service: 500000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 14: Tiêu hóa
      { name: 'Trần Ngọc Ánh', specialty_id: 14, academic_rank_id: 2, degree_id: 4, img: '/dimages/bs-tran-ngoc-anh.jpg', price_service: 400000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nguyễn Thị Chi', specialty_id: 14, academic_rank_id: null, degree_id: 2, img: '/dimages/bs-nguyen-thi-chi.jpg', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 15: Tim mạch
      { name: 'Vũ Đức Trung', specialty_id: 15, academic_rank_id: 1, degree_id: 4, img: '/dimages/bs-vu-duc-trung.jpg', price_service: 500000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Lê Văn Tú', specialty_id: 15, academic_rank_id: null, degree_id: 2, img: '/dimages/bs-le-van-tu.jpg', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },

      // Chuyên khoa 16: Truyền nhiễm
      { name: 'Nguyễn Danh Đức', specialty_id: 16, academic_rank_id: null, degree_id: 2, img: '/dimages/bs-nguyen-danh-duc.jpg', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Tạ Thị Diệu Ngân', specialty_id: 16, academic_rank_id: null, degree_id: 4, img: '/dimages/bs-ta-thi-dieu-ngan.jpg', price_service: 300000, createdAt: new Date(), updatedAt: new Date() },
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Doctors', null, {});
  }
};
