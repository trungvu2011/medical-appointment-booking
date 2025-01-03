import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


function ModalSelectPatient({ isOpen, onClose, userData, doctorif }) {
    let navigate = useNavigate();
    let [patientData, setPatientData] = useState(null);

    useEffect(() => {

        axios.get('/api/get-all-members', {
            params: {
                id: userData.id,
                phone: userData.phone,
                name: userData.name,
                citizen_id: userData.citizen_id
            }
        })
            .then(response => {
                setPatientData(response.data);
            })
            .catch(error => {
                console.error('Lỗi khi lấy dữ liệu bệnh nhân:', error);
            });
    }, []);

    let renderPatientCards = () => {
        let cards = [];
        let userData = localStorage.getItem('user');
        userData = JSON.parse(userData);
        cards.push(
            <div className="patient-card" key="0" onClick={() => onSelect(userData, doctorif)}>
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
                <div className="patient-card" key={patient.id} onClick={() => onSelect(patient, doctorif)}>
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

    const onSelect = (patient, doctorif) => {
        navigate('/select-date', { state: { patient: patient, doctor: doctorif } });
    };

    return (
        <Modal show={isOpen} onHide={onClose}>
            <div className="registration-page">
                <div className="background-banner">
                    <h1 className="title">Đăng ký khám</h1>
                </div>

                <div className="registration-container">
                    <div className="progress-steps">
                        <div className="step active">1</div>
                        <div className="step">2</div>
                        <div className="step">3</div>
                        <div className="step">4</div>
                    </div>

                    <div className="patient-list">
                        {patientData ? renderPatientCards() : 'Đang tải dữ liệu...'}
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default ModalSelectPatient;