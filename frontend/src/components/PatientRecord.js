import React, { useState, useEffect } from 'react';
import './PatientRecord.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import ModalAddMember from './ModalAddMember';
import axios from 'axios';

function PatientRecord() {
    let [isModalOpen, setIsModalOpen] = useState(false);
    let [patientData, setPatientData] = useState(null);

    let openModal = () => setIsModalOpen(true);
    let closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        let userData = localStorage.getItem('user');

        if (userData) {
            userData = JSON.parse(userData);

            axios.get('/api/get-all-members', {
                params: {
                    id: userData.id,
                    phone: userData.phone,
                    name: userData.name,
                    citizen_id: userData.citizen_id
                }
            })
                .then(response => {
                    console.log('Dữ liệu bệnh nhân:', response.data);
                    setPatientData(response.data);
                })
                .catch(error => {
                    console.error('Lỗi khi lấy dữ liệu bệnh nhân:', error);
                });
        } else {
            console.log('Không có dữ liệu người dùng trong localStorage');
        }
    }, []);

    let renderPatientCards = () => {
        let cards = [];
        let userData = localStorage.getItem('user');
        userData = JSON.parse(userData);
        cards.push(
            <div className="patient-card" key="0">
                <FontAwesomeIcon className='patient-avatar' icon={faUser} />
                <div className="patient-info">
                    <div className="patient-name">{userData.name}</div>
                    <div className="patient-details">
                        SĐT: {userData.phone}
                    </div>
                </div>
                <FontAwesomeIcon className="patient-select" icon={faChevronRight} />
            </div>
        );
        for (let i = 0; i < patientData.length; i++) {
            let patient = patientData[i];
            cards.push(
                <div className="patient-card" key={patient.id}>
                    <FontAwesomeIcon className='patient-avatar' icon={faUser} />
                    <div className="patient-info">
                        <div className="patient-name">{patient.name}</div>
                        <div className="patient-details">
                            SĐT: {patient.phone}
                        </div>
                    </div>
                    <FontAwesomeIcon className="patient-select" icon={faChevronRight} />
                </div>
            );
        }
        return cards;
    };

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
                    {patientData ? renderPatientCards() : 'Đang tải dữ liệu...'}
                    <button className="add-member-button" onClick={openModal}>+ Thêm thành viên mới</button>
                </div>
            </div>

            <ModalAddMember isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}

export default PatientRecord;
