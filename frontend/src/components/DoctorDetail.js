import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DoctorDetail.scss';
import ModalSelectPatient from './ModalSelectPatient';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function DoctorDetail() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [doctor, setDoctor] = useState({});
    const [doctotIF, setDoctorIF] = useState({});
    const [loading, setLoading] = useState(true); // Thêm trạng thái loading để xử lý khi đang fetch dữ liệu
    const [error, setError] = useState(null); // Thêm trạng thái lỗi nếu fetch thất bại
    const [user, setSelected] = useState(null);

    const userData = JSON.parse(localStorage.getItem('user'));


    const openModal = (userData, doctorif) => {
        setSelected(userData);
        setDoctorIF(doctorif)
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelected(null);
        setDoctorIF(null);
        setIsModalOpen(false);
    };

    useEffect(() => {
        const fetchDoctor = async () => {
            try {
                const doctorResponse = await axios.get('/api/get-doctor-by-id', {
                    params: {
                        id: window.location.pathname.split('/')[2], // Lấy id từ URL
                    },
                });
                const doctorData = doctorResponse.data.data;
                if ((doctorData.deg === 'GS' || doctorData.deg === 'PGS') && doctorData.aca_rank) {
                    doctorData.aca_rank = 'TS';
                    doctorData.academic_rank = 'Tiến sĩ';
                }
                if (doctorData.degree && doctorData.academic_rank) {
                    doctorData.level = `${doctorData.degree} ${doctorData.academic_rank}`;
                } else if (doctorData.degree) {
                    doctorData.level = doctorData.degree;
                } else if (doctorData.academic_rank) {
                    doctorData.level = doctorData.academic_rank;
                }
                setDoctor(doctorData);
                console.log(doctorData)
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
                <button
                    className="booking-button"
                    onClick={(e) => {
                        openModal(user)
                    }}
                >Đặt lịch</button>
                <ModalSelectPatient isOpen={isModalOpen} onClose={closeModal} userData={userData} doctorif={doctor} />
            </div>
        </div>
    );
}

export default DoctorDetail;
