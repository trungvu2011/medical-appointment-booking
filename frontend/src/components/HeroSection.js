import React from 'react';
import './HeroSection.scss';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserDoctor, faFileLines } from '@fortawesome/free-solid-svg-icons';

function HeroSection() {
    let navigate = useNavigate();

    let handleClickBooking = () => {
        navigate('/select-patients');
    }

    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1>Đặt lịch và xem kết quả khám online</h1>
                <p>Giờ đây bạn có thể đặt lịch trước khi tới khám và xem được kết quả khám online nhanh chóng mọi lúc mọi nơi</p>
                <div className="services">
                    <div className="service-card" onClick={handleClickBooking}>
                        <FontAwesomeIcon className='icon' icon={faUserDoctor} size='3x' />
                        <div className='card-content'>
                            <h3>Đặt lịch khám</h3>
                            <p>Đặt lịch khám online trước khi tới viện</p>
                        </div>
                    </div>
                    <div className="service-card">
                        <FontAwesomeIcon className='icon' icon={faFileLines} size='3x' />
                        <div className='card-content'>
                            <h3>Hồ sơ sức khỏe</h3>
                            <p>Xem và lưu trữ kết quả khám bệnh</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src={require("../assets/bg-dhy2.png")} alt="Nhân viên y tế" />
            </div>
        </section>
    );
}

export default HeroSection;
