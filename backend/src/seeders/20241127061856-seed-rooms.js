'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Rooms', [
            { name: 'P201', base: 'Cơ sở 1 - Số 1 Tôn Thất Tùng, Phường Trung Tự, Quận Đống Đa, Hà Nội', doctor_id: 1, createdAt: new Date(), updatedAt: new Date() },
            { name: 'P202', base: 'Cơ sở 1 - Số 1 Tôn Thất Tùng, Phường Trung Tự, Quận Đống Đa, Hà Nội', doctor_id: 3, createdAt: new Date(), updatedAt: new Date() },
            { name: 'P203', base: 'Cơ sở 1 - Số 1 Tôn Thất Tùng, Phường Trung Tự, Quận Đống Đa, Hà Nội', doctor_id: 5, createdAt: new Date(), updatedAt: new Date() },
            { name: 'P204', base: 'Cơ sở 1 - Số 1 Tôn Thất Tùng, Phường Trung Tự, Quận Đống Đa, Hà Nội', doctor_id: 7, createdAt: new Date(), updatedAt: new Date() },
            { name: 'P205', base: 'Cơ sở 1 - Số 1 Tôn Thất Tùng, Phường Trung Tự, Quận Đống Đa, Hà Nội', doctor_id: 9, createdAt: new Date(), updatedAt: new Date() },
            { name: 'P301', base: 'Cơ sở 1 - Số 1 Tôn Thất Tùng, Phường Trung Tự, Quận Đống Đa, Hà Nội', doctor_id: 11, createdAt: new Date(), updatedAt: new Date() },
            { name: 'P302', base: 'Cơ sở 1 - Số 1 Tôn Thất Tùng, Phường Trung Tự, Quận Đống Đa, Hà Nội', doctor_id: 13, createdAt: new Date(), updatedAt: new Date() },
            { name: 'P303', base: 'Cơ sở 1 - Số 1 Tôn Thất Tùng, Phường Trung Tự, Quận Đống Đa, Hà Nội', doctor_id: 15, createdAt: new Date(), updatedAt: new Date() },
            { name: 'P304', base: 'Cơ sở 1 - Số 1 Tôn Thất Tùng, Phường Trung Tự, Quận Đống Đa, Hà Nội', doctor_id: 16, createdAt: new Date(), updatedAt: new Date() },
            { name: 'P305', base: 'Cơ sở 1 - Số 1 Tôn Thất Tùng, Phường Trung Tự, Quận Đống Đa, Hà Nội', doctor_id: 18, createdAt: new Date(), updatedAt: new Date() },
            { name: 'P401', base: 'Cơ sở 1 - Số 1 Tôn Thất Tùng, Phường Trung Tự, Quận Đống Đa, Hà Nội', doctor_id: 20, createdAt: new Date(), updatedAt: new Date() },
            { name: 'P402', base: 'Cơ sở 1 - Số 1 Tôn Thất Tùng, Phường Trung Tự, Quận Đống Đa, Hà Nội', doctor_id: 22, createdAt: new Date(), updatedAt: new Date() },
            { name: 'P403', base: 'Cơ sở 1 - Số 1 Tôn Thất Tùng, Phường Trung Tự, Quận Đống Đa, Hà Nội', doctor_id: 24, createdAt: new Date(), updatedAt: new Date() },
            { name: 'P404', base: 'Cơ sở 1 - Số 1 Tôn Thất Tùng, Phường Trung Tự, Quận Đống Đa, Hà Nội', doctor_id: 26, createdAt: new Date(), updatedAt: new Date() },
            { name: 'P405', base: 'Cơ sở 1 - Số 1 Tôn Thất Tùng, Phường Trung Tự, Quận Đống Đa, Hà Nội', doctor_id: 28, createdAt: new Date(), updatedAt: new Date() },
            { name: 'P501', base: 'Cơ sở 1 - Số 1 Tôn Thất Tùng, Phường Trung Tự, Quận Đống Đa, Hà Nội', doctor_id: 30, createdAt: new Date(), updatedAt: new Date() },
            { name: 'P502', base: 'Cơ sở 1 - Số 1 Tôn Thất Tùng, Phường Trung Tự, Quận Đống Đa, Hà Nội', doctor_id: 32, createdAt: new Date(), updatedAt: new Date() },
            { name: 'P503', base: 'Cơ sở 1 - Số 1 Tôn Thất Tùng, Phường Trung Tự, Quận Đống Đa, Hà Nội', doctor_id: 34, createdAt: new Date(), updatedAt: new Date() },
            { name: 'P504', base: 'Cơ sở 1 - Số 1 Tôn Thất Tùng, Phường Trung Tự, Quận Đống Đa, Hà Nội', doctor_id: 36, createdAt: new Date(), updatedAt: new Date() },
            { name: 'P505', base: 'Cơ sở 1 - Số 1 Tôn Thất Tùng, Phường Trung Tự, Quận Đống Đa, Hà Nội', doctor_id: 38, createdAt: new Date(), updatedAt: new Date() },

            { name: 'P201', base: 'Cơ sở 2 - Số 10 Trương Công Giai, Cầu Giấy, Hà Nội', doctor_id: 2, createdAt: new Date(), updatedAt: new Date() },
            { name: 'P202', base: 'Cơ sở 2 - Số 10 Trương Công Giai, Cầu Giấy, Hà Nội', doctor_id: 4, createdAt: new Date(), updatedAt: new Date() },
            { name: 'P203', base: 'Cơ sở 2 - Số 10 Trương Công Giai, Cầu Giấy, Hà Nội', doctor_id: 6, createdAt: new Date(), updatedAt: new Date() },
            { name: 'P204', base: 'Cơ sở 2 - Số 10 Trương Công Giai, Cầu Giấy, Hà Nội', doctor_id: 8, createdAt: new Date(), updatedAt: new Date() },
            { name: 'P205', base: 'Cơ sở 2 - Số 10 Trương Công Giai, Cầu Giấy, Hà Nội', doctor_id: 10, createdAt: new Date(), updatedAt: new Date() },
            { name: 'P301', base: 'Cơ sở 2 - Số 10 Trương Công Giai, Cầu Giấy, Hà Nội', doctor_id: 12, createdAt: new Date(), updatedAt: new Date() },
            { name: 'P302', base: 'Cơ sở 2 - Số 10 Trương Công Giai, Cầu Giấy, Hà Nội', doctor_id: 14, createdAt: new Date(), updatedAt: new Date() },
            { name: 'P303', base: 'Cơ sở 2 - Số 10 Trương Công Giai, Cầu Giấy, Hà Nội', doctor_id: 17, createdAt: new Date(), updatedAt: new Date() },
            { name: 'P304', base: 'Cơ sở 2 - Số 10 Trương Công Giai, Cầu Giấy, Hà Nội', doctor_id: 19, createdAt: new Date(), updatedAt: new Date() },
            { name: 'P305', base: 'Cơ sở 2 - Số 10 Trương Công Giai, Cầu Giấy, Hà Nội', doctor_id: 21, createdAt: new Date(), updatedAt: new Date() },
            { name: 'P401', base: 'Cơ sở 2 - Số 10 Trương Công Giai, Cầu Giấy, Hà Nội', doctor_id: 23, createdAt: new Date(), updatedAt: new Date() },
            { name: 'P402', base: 'Cơ sở 2 - Số 10 Trương Công Giai, Cầu Giấy, Hà Nội', doctor_id: 25, createdAt: new Date(), updatedAt: new Date() },
            { name: 'P403', base: 'Cơ sở 2 - Số 10 Trương Công Giai, Cầu Giấy, Hà Nội', doctor_id: 27, createdAt: new Date(), updatedAt: new Date() },
            { name: 'P404', base: 'Cơ sở 2 - Số 10 Trương Công Giai, Cầu Giấy, Hà Nội', doctor_id: 29, createdAt: new Date(), updatedAt: new Date() },
            { name: 'P405', base: 'Cơ sở 2 - Số 10 Trương Công Giai, Cầu Giấy, Hà Nội', doctor_id: 31, createdAt: new Date(), updatedAt: new Date() },
            { name: 'P501', base: 'Cơ sở 2 - Số 10 Trương Công Giai, Cầu Giấy, Hà Nội', doctor_id: 33, createdAt: new Date(), updatedAt: new Date() },
            { name: 'P502', base: 'Cơ sở 2 - Số 10 Trương Công Giai, Cầu Giấy, Hà Nội', doctor_id: 35, createdAt: new Date(), updatedAt: new Date() },
            { name: 'P503', base: 'Cơ sở 2 - Số 10 Trương Công Giai, Cầu Giấy, Hà Nội', doctor_id: 37, createdAt: new Date(), updatedAt: new Date() },
            { name: 'P504', base: 'Cơ sở 2 - Số 10 Trương Công Giai, Cầu Giấy, Hà Nội', doctor_id: 39, createdAt: new Date(), updatedAt: new Date() },
        ])
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Rooms', null, {});
    }
};
