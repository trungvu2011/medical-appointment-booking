# Medical Appointment Booking Website

## Tổng quan
Dự án này là một hệ thống đặt lịch hẹn y tế được thiết kế để đơn giản hóa quy trình lên lịch và quản lý các cuộc hẹn y tế.

## Tính năng
- Đăng ký và xác thực người dùng
- Lên lịch và quản lý cuộc hẹn cho bản thân và người thân
- Hồ sơ bác sĩ và bệnh nhân

## Người đóng góp
- **Vũ Đức Trung** - Chức năng đặt lịch khám bệnh cho bản thân và người nhànhà
- **Nguyễn Hoàng Chiến** - Chức năng sửa thông tin người dùng và xem lịch khám bệnh

## Thiết kế
Hệ thống được thiết kế sử dụng kiến trúc microservices với các thành phần sau:
- **Frontend**: React.js
- **Backend**: Node.js với Express
- **Cơ sở dữ liệu**: MySQL

## Các điểm cuối API
### Người dùng
- `POST /api/register` - Đăng ký người dùng mới
- `POST /api/login` - Đăng nhập người dùng
- `POST /api/edit-user-info` - Sửa thông tin người dùng

### Thành viên
- `POST /api/add-member` - Thêm thành viên mới
- `GET /api/get-all-members` - Lấy tất cả các thành viên

### Cuộc hẹn
- `POST /api/book-appointment` - Đặt cuộc hẹn mới
- `GET /api/get-appointments` - Lấy tất cả các cuộc hẹn

### Bác sĩ
- `GET /api/get-doctor-by-id` - Lấy bác sĩ theo ID
- `GET /api/get-all-doctors` - Lấy tất cả các bác sĩ
- `GET /api/get-all-specialties` - Lấy tất cả các chuyên khoa
- `GET /api/get-date-list-by-doctor` - Lấy danh sách ngày theo bác sĩ
- `GET /api/get-doctors` - Lấy danh sách bác sĩ

### Tin tức
- `GET /api/get-all-news` - Lấy tất cả các tin tức
- `GET /api/get-news-by-id` - Lấy tin tức theo ID

## Cài đặt
1. Clone repository
    ```bash
    git clone https://github.com/trungvu2011/medical-appointment-booking.git
    ```

2. Cài đặt các phụ thuộc cho backend
    ```bash
    cd medical-appointment-booking/backend
    npm install
    ```

3. Cài đặt các phụ thuộc cho frontend
    ```bash
    cd ../frontend
    npm install
    ```

4. Cấu hình môi trường cho backend
    - Tạo file `.env` trong thư mục [backend] dựa trên file `.env.example`
    - Cập nhật các biến môi trường trong file `.env` theo cấu hình của bạn

5. Cấu hình môi trường cho frontend
    - Tạo file `.env` trong thư mục [frontend] dựa trên file `.env.example`
    - Cập nhật các biến môi trường trong file `.env` theo cấu hình của bạn

6. Khởi động server phát triển cho backend
    ```bash
    cd ../backend
    npm start
    ```

7. Khởi động server phát triển cho frontend
    ```bash
    cd ../frontend
    npm start
    ```

8. Truy cập ứng dụng
    - Backend server sẽ chạy trên `http://localhost:8080`
    - Frontend server sẽ chạy trên `http://localhost:3000`
