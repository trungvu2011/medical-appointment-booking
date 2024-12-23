import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DoctorDetail.scss';

function DoctorDetail() {
    const [doctor, setDoctor] = useState({});
    const [loading, setLoading] = useState(true); // Thêm trạng thái loading để xử lý khi đang fetch dữ liệu
    const [error, setError] = useState(null); // Thêm trạng thái lỗi nếu fetch thất bại

    useEffect(() => {
        const fetchDoctor = async () => {
            try {
                const doctorResponse = await axios.get('/api/get-doctor-by-id', {
                    params: {
                        id: window.location.pathname.split('/')[2], // Lấy id từ URL
                    },
                });
                setDoctor(doctorResponse.data.data);
                console.log(doctor)
                setLoading(false); // Dữ liệu đã được lấy xong
            } catch (error) {
                setError('Có lỗi xảy ra khi tải thông tin bác sĩ!');
                setLoading(false);
            }
        };
        fetchDoctor();
    }, []);

    // Nếu đang tải dữ liệu hoặc có lỗi
    if (loading) return <div>Đang tải thông tin...</div>;
    if (error) return <div>{error}</div>;

    // Kiểm tra price_service trước khi gọi toLocaleString
    const priceServiceFormatted = doctor.price_service ? doctor.price_service.toLocaleString() : 'Chưa có giá';

    return (
        <div className="container">
            <h1>{doctor.academic_rank} {doctor.degree} {doctor.name}</h1>
            <div className="doctor-detail">
                <div className="doctor-img">
                    <img src={doctor.img} alt={doctor.name} />
                </div>
                <div className="doctor-info">
                    <p><strong>Chuyên khoa:</strong> {doctor.specialty}</p>
                    <p><strong>Học hàm:</strong> {doctor.academic_rank ? doctor.academic_rank : 'Chưa có'}</p>
                    <p><strong>Học vị:</strong> {doctor.degree}</p>
                    <p><strong>Giá dịch vụ:</strong> {priceServiceFormatted} VND</p>
                    <p><strong>Địa chỉ làm việc:</strong> {doctor.base} </p>
                </div>
            </div>
        </div>
    );
}

export default DoctorDetail;
