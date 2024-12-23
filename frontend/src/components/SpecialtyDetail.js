import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './SpecialtyDetail.scss';

function SpecialtyDetail() {
    const { state } = useLocation();
    const { specialty } = state || {};

    useEffect(() => {
        console.log('Specialty:', specialty);
    }, [specialty]);

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
        </div>
    );
}

export default SpecialtyDetail;
