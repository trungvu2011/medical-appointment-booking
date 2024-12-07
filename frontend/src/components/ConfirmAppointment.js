import React, { useState } from 'react';
import './ConfirmAppointment.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckToSlot } from '@fortawesome/free-solid-svg-icons';
import { faUser, faUserDoctor, faNotesMedical } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck, faClock, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from 'react-router-dom';

function ConfirmAppointment() {
    let location = useLocation();
    let navigate = useNavigate();
    let patient = location.state?.patient;
    let doctor = location.state?.doctor;
    let appointment = location.state?.appointment;

    let [symptom, setSymptom] = useState('');
    let [isConfirmed, setIsConfirmed] = useState(false);

    let handleConfirm = () => {
        setIsConfirmed(true); // Hiển thị thông báo "Đặt khám thành công"
        let data = {
            patient: patient,
            doctor: doctor,
            appointment: appointment,
            symptom: symptom
        };
        console.log(data);
    };

    return (
        <div className="registration-page">
            <div className="background-banner">
                <h1 className="title">Đăng ký khám</h1>
            </div>

            <div className="registration-container">
                {isConfirmed && (
                    <div className="success-message">
                        <FontAwesomeIcon className='success-icon' icon={faCheckToSlot} />
                        <h3>Đặt khám thành công</h3>
                    </div>
                )}
                {!isConfirmed && (
                    <div className="progress-steps">
                        <div className="step active">1</div>
                        <div className="step active">2</div>
                        <div className="step active">3</div>
                        <div className="step active">4</div>
                    </div>
                )}

                {!isConfirmed && (
                    <h5 className="appointment-text">Người tới khám</h5>
                )}
                <div className="appointment-container">
                    <div className="patient-info">
                        <FontAwesomeIcon className="patient-avatar" icon={faUser} />
                        <div className="patient-name">{patient?.name}</div>
                    </div>
                    <div className="doctor-info">
                        <FontAwesomeIcon className="doctor-avatar" icon={faUserDoctor} />
                        <div className="doctor">
                            <div className="doctor-text">Bác sĩ</div>
                            <div className="doctor-name">{doctor?.level + ' ' + doctor?.name}</div>
                        </div>
                    </div>
                    <div className="specialty-info">
                        <FontAwesomeIcon className="specialty-icon" icon={faNotesMedical} />
                        <div className="specialty">
                            <div className="specialty-text">Chuyên khoa khám</div>
                            <div className="specialty-name">{doctor?.specialty}</div>
                            <div className="price">{doctor?.price_service} VND</div>
                        </div>
                    </div>
                    <div className="appointment-time">
                        <FontAwesomeIcon className="appointment-icon" icon={faCalendarCheck} />
                        <h5 className="time-text">Giờ hẹn:</h5>
                        <div className="time">
                            <FontAwesomeIcon className="time-icon" icon={faClock} />
                            <span>{appointment?.time}</span>
                        </div>
                        <div className="date">
                            <FontAwesomeIcon className="date-icon" icon={faCalendarDays} />
                            <span>{appointment?.date}</span>
                        </div>
                    </div>
                    {isConfirmed && (
                        <div className="symptom-confirm">
                            <FontAwesomeIcon className="symptom-icon" icon={faCalendarDays} />
                            <div className='symptom'>
                                <h5>Triệu chứng:</h5>
                                <span>{symptom}</span>

                            </div>
                        </div>
                    )}
                </div>


                {!isConfirmed && (
                    <div className="symptom-container">
                        <h5 className="symptom-text">Triệu chứng:</h5>
                        <textarea
                            className="symptom-input"
                            value={symptom}
                            onChange={(e) => setSymptom(e.target.value)}
                            placeholder="Nhập triệu chứng"
                        />
                    </div>
                )}

                {!isConfirmed && (
                    <button className="confirm-btn" onClick={handleConfirm}>
                        Đặt lịch hẹn
                    </button>
                )}
                {isConfirmed && (
                    <div className='done-btn'>
                        <button className='home-btn' onClick={() => { navigate('/') }}>Trang chủ</button>
                        <button className='more-btn' onClick={() => { navigate('/select-patient') }}>Đặt thêm lịch</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ConfirmAppointment;
