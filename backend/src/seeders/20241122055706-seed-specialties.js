'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Specialties', [
      {
        name: 'Bác sỹ gia đình',
        img: '/simages/bac-sy-gia-dinh.png',
        description: 'Bác sĩ gia đình cung cấp dịch vụ chăm sóc sức khỏe toàn diện và liên tục cho mọi lứa tuổi. Họ có thể hỗ trợ phòng ngừa, chẩn đoán, điều trị bệnh và hướng dẫn bệnh nhân trong các trường hợp cần chuyển viện.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Da liễu',
        img: '/simages/da-lieu.png',
        description: 'Chuyên khoa Da liễu tập trung vào các bệnh lý về da, tóc, móng và các vấn đề liên quan. Bác sĩ da liễu có thể giúp điều trị từ các bệnh thông thường như mụn, nám da đến các bệnh lý phức tạp như vảy nến, eczema và ung thư da.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Tiểu đường - Nội tiết',
        img: '/simages/tieu-duong.png',
        description: 'Chuyên khoa Tiểu đường - Nội tiết chuyên chẩn đoán và điều trị các bệnh liên quan đến rối loạn nội tiết, đặc biệt là bệnh tiểu đường. Họ cũng giúp bệnh nhân kiểm soát các biến chứng liên quan như bệnh tim, thận và thần kinh.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Dị ứng - Miễn dịch',
        img: '/simages/di-ung-mien-dich.png',
        description: 'Chuyên khoa Dị ứng - Miễn dịch hỗ trợ điều trị các tình trạng dị ứng và rối loạn miễn dịch như viêm mũi dị ứng, hen suyễn, lupus ban đỏ và các bệnh tự miễn khác. Họ giúp nâng cao chất lượng sống cho bệnh nhân.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Nội khoa',
        img: '/simages/noi-khoa.png',
        description: 'Nội khoa là lĩnh vực y học chuyên sâu về chẩn đoán và điều trị các bệnh lý nội tạng mà không cần phẫu thuật. Chuyên khoa này tập trung vào các bệnh như cao huyết áp, rối loạn tiêu hóa, và các vấn đề về tim mạch.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Hô hấp - Phổi',
        img: '/simages/ho-hap-phoi.png',
        description: 'Chuyên khoa Hô hấp - Phổi chuyên điều trị các bệnh liên quan đến đường hô hấp như viêm phổi, hen suyễn, bệnh phổi tắc nghẽn mạn tính (COPD) và ung thư phổi. Các bác sĩ tập trung vào cải thiện chức năng hô hấp và chất lượng sống của bệnh nhân.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mắt',
        img: '/simages/mat.png',
        description: 'Chuyên khoa Mắt cung cấp các dịch vụ chăm sóc và điều trị các vấn đề về thị lực và mắt như cận thị, loạn thị, đục thủy tinh thể, và bệnh lý võng mạc. Các bác sĩ mắt cũng thực hiện phẫu thuật khi cần thiết.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Nam học',
        img: '/simages/nam-hoc.png',
        description: 'Nam học chuyên giải quyết các vấn đề sức khỏe sinh sản và giới tính của nam giới. Các bác sĩ nam học điều trị các rối loạn như rối loạn cương dương, vô sinh nam, và các bệnh lý về tuyến tiền liệt.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Thận - Tiết niệu',
        img: '/simages/than-tiet-nieu.png',
        description: 'Chuyên khoa Thận - Tiết niệu tập trung vào chẩn đoán và điều trị các bệnh liên quan đến thận và đường tiết niệu, như sỏi thận, viêm bàng quang, và suy thận mạn tính.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Nhi khoa',
        img: '/simages/nhi-khoa.png',
        description: 'Chuyên khoa Nhi khoa cung cấp dịch vụ chăm sóc sức khỏe toàn diện cho trẻ em từ sơ sinh đến thanh thiếu niên. Các bác sĩ nhi khoa chuyên điều trị các bệnh lý thường gặp ở trẻ em và theo dõi sự phát triển toàn diện của trẻ.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Phụ sản',
        img: '/simages/phu-san.png',
        description: 'Chuyên khoa Phụ sản tập trung vào chăm sóc sức khỏe phụ nữ, bao gồm thai kỳ, sinh nở và các bệnh phụ khoa. Các bác sĩ phụ sản đảm bảo sức khỏe cho cả mẹ và bé trong suốt thai kỳ và sau sinh.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Răng hàm mặt',
        img: '/simages/rang-ham-mat.png',
        description: 'Chuyên khoa Răng hàm mặt chuyên điều trị các vấn đề về răng miệng, hàm và mặt. Các dịch vụ bao gồm trám răng, chỉnh nha, phẫu thuật hàm mặt và điều trị các bệnh lý răng miệng.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Tai mũi họng',
        img: '/simages/tai-mui-hong.png',
        description: 'Chuyên khoa Tai mũi họng cung cấp dịch vụ điều trị các bệnh lý liên quan đến tai, mũi và họng như viêm tai giữa, viêm xoang, và viêm họng mãn tính. Họ cũng thực hiện phẫu thuật khi cần thiết.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Tiêu hóa',
        img: '/simages/tieu-hoa.png',
        description: 'Chuyên khoa Tiêu hóa tập trung vào các bệnh lý về hệ tiêu hóa, bao gồm dạ dày, ruột non, đại tràng và gan. Các bác sĩ tiêu hóa hỗ trợ chẩn đoán và điều trị các bệnh như viêm loét dạ dày, hội chứng ruột kích thích và ung thư tiêu hóa.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Tim mạch',
        img: '/simages/tim-mach.png',
        description: 'Chuyên khoa Tim mạch chuyên điều trị các bệnh lý liên quan đến hệ tim mạch như tăng huyết áp, bệnh mạch vành, suy tim, và rối loạn nhịp tim. Mục tiêu là bảo vệ sức khỏe tim mạch của bệnh nhân.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Truyền nhiễm',
        img: '/simages/truyen-nhiem.png',
        description: 'Chuyên khoa Truyền nhiễm tập trung vào điều trị các bệnh lý do virus, vi khuẩn và ký sinh trùng gây ra như sốt xuất huyết, viêm gan, và HIV/AIDS. Các bác sĩ cũng tham gia vào công tác phòng chống dịch bệnh.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Specialties', null, {});
  }
};
