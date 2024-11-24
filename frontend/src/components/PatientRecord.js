import React from 'react';
import './PatientRecord.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function PatientRecord() {
    return (
        <div className="registration-page">
            <div className="background-banner">
                <h1 className="title">Đăng ký khám</h1>
            </div>

            <div className="registration-container">
                <div className="progress-steps">
                    <div className="step active">1</div>
                    <div className="step active">2</div>
                    <div className="step">3</div>
                </div>

                <div className="patient-list">
                    <div className="patient-card">
                        <FontAwesomeIcon className='patient-avatar' icon={faUser} />
                        <div className="patient-info">
                            <div className="patient-name">Vũ Đức Trung</div>
                            <div className="patient-details">
                                SĐT: 0775027527
                            </div>
                        </div>
                        <FontAwesomeIcon className="patient-select" icon={faChevronRight} />
                    </div>

                    <div className="patient-card">
                        <FontAwesomeIcon className='patient-avatar' icon={faUser} />
                        <div className="patient-info">
                            <div className="patient-name">Nguyễn Hoàng Chiến</div>
                            <div className="patient-details">
                                SĐT: 0775027527
                            </div>
                        </div>
                        <FontAwesomeIcon className="patient-select" icon={faChevronRight} />
                    </div>

                    <div className="patient-card">
                        <FontAwesomeIcon className='patient-avatar' icon={faUser} />
                        <div className="patient-info">
                            <div className="patient-name">Nguyễn Hoàng Chiến</div>
                            <div className="patient-details">
                                SĐT: 0327505682
                            </div>
                        </div>
                        <FontAwesomeIcon className="patient-select" icon={faChevronRight} />
                    </div>

                    <button className="add-member-button">+ Thêm thành viên mới</button>
                </div>
            </div>
        </div>
    );
}

export default PatientRecord;
