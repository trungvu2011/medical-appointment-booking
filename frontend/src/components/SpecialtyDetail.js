import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './SpecialtyDetail.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function SpecialtyDetail() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { specialty } = state || {};
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        console.log('Specialty:', specialty);
        fetchDoctor(specialty.id);
    }, [specialty]);

    const fetchDoctor = async (id) => {
        try {
            const response = await axios.get('/api/get-doctors', {
                params: { id },
            });
            let first = response.data;
            setDoctors(first.data);
        } catch (error) {
            console.error("Lỗi khi lấy danh sách bác sĩ:", error);
        }
    };

    if (!specialty) {
        return <div className="error-message">Không có thông tin chuyên khoa.</div>;
    }

    return (
        <div className="specialty-container">
            <div className="specialty-header">
                <img className="specialty-image" src={specialty.img} alt={specialty.name} />
                <div className="specialty-info">
                    <h1 className="specialty-name">{specialty.name}</h1>
                    <p className="specialty-description">{specialty.description}</p>
                </div>
            </div>
            <div className="additional-info">
                <h3>Thông tin bổ sung:</h3>
                <p>Chuyên khoa này cung cấp các dịch vụ chăm sóc sức khỏe toàn diện cho mọi lứa tuổi. Họ có thể hỗ trợ phòng ngừa, chẩn đoán, điều trị bệnh và chuyển viện khi cần thiết.</p>
            </div>

            <div className="doctor-list">
                <h2>Danh sách bác sĩ</h2>
                {doctors.length > 0 ? (
                    doctors.map((doctor) => (
                        <div key={doctor.id} className="doctor-card">
                            <img src={doctor.img} alt={doctor.name} className="doctor-image" />
                            <div className="doctor-info">
                                <h3 className="doctor-name">{doctor.aca_rank} {doctor.deg} {doctor.name}</h3>
                                <p className="doctor-specialty">{doctor.specialty}</p>
                                <button className="detail-button"
                                    onClick={() => {
                                        navigate(`/doctor/${doctor.id}`);
                                    }}
                                >Xem chi tiết</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-results">Không có bác sĩ nào được tìm thấy.</p>
                )}
            </div>
        </div>


    );
}

export default SpecialtyDetail;
