import React, { useState, useEffect } from 'react';
import './PatientEdit.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faChevronRight, faHospital } from '@fortawesome/free-solid-svg-icons';
import ModalEdit from './ModalEdit';
import axios from 'axios';

function PatientEdit() {
    let [isModalOpen, setIsModalOpen] = useState(false);
    let [patientData, setPatientData] = useState([]);
    let [selectedPatient, setSelectedPatient] = useState(null);

    let openModal = (patient) => {
        setSelectedPatient(patient);
        setIsModalOpen(true);
    };
    
    let closeModal = () => {
        setSelectedPatient(null);
        setIsModalOpen(false);
    };

    // Lấy dữ liệu người dùng từ localStorage và gọi API
    useEffect(() => {
        let userData = JSON.parse(localStorage.getItem('user'));
        if (userData) {
            axios.get('/api/get-all-members', {
                params: {
                    id: userData.id,
                    phone: userData.phone,
                    name: userData.name,
                    citizen_id: userData.citizen_id,
                },
            })
                .then((response) => {
                    console.log('Dữ liệu bệnh nhân:', response.data);
                    setPatientData(response.data);
                })
                .catch((error) => {
                    console.error('Lỗi khi lấy dữ liệu bệnh nhân:', error);
                });
        } else {
            console.log('Không có dữ liệu người dùng trong localStorage');
        }
    }, []);

    let handleSelectPatient = (patient) => {
        setSelectedPatient(patient);
    };

    let renderPatientCards = () => {
        let cards = [];
        let userData = JSON.parse(localStorage.getItem('user'));
        if (!userData) return null;
            // Hiển thị thẻ người dùng chính
        cards.push(
            <div className="patient-card" key="0">
                <FontAwesomeIcon className="patient-avatar" icon={faUser} />
                <div className="patient-info">
                    <div className="patient-name">{userData.name}</div>
                    <div className="patient-details">SĐT: {userData.phone}</div>
                </div>
                <button
                    className="edit-button"
                    onClick={(e) => {
                        e.stopPropagation(); // Ngăn chặn sự kiện chọn thẻ
                        openModal(userData);
                    }}
                >
                    Sửa
                </button>
                <ModalEdit isOpen={isModalOpen} onClose={closeModal} patient={selectedPatient} />
            </div>);
    
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
                        <button
                    className="edit-button"
                    onClick={(e) => {
                        e.stopPropagation(); // Ngăn chặn sự kiện chọn thẻ
                        openModal(patient);
                    }}
                >
                    Sửa
                </button>
                <ModalEdit isOpen={isModalOpen} onClose={closeModal} patient={selectedPatient} />
                    </div>
                );
            };
            return cards;
    };

    return (
        <div className="patient-edit">
            {/* Header */}
            <header className="header">
                <div className="logo">
                    <a href="/">
                        <FontAwesomeIcon className="hospital-icon" icon={faHospital} />
                        <h2 className="hospital-name">E-Hospital</h2>
                    </a>
                </div>
                <div className="hotline">
                    Hotline: <span>1900 6422</span>
                </div>
            </header>

            {/* Main Content */}
            <main className="content">
                {/* Sidebar */}
                <div className="sidebar">

                    <div className="patient-list">{renderPatientCards()}</div>
                </div>

                {/* Patient Details */}
                <div className="patient-details">
                    {selectedPatient ? (
                        <div className="details-card">
                            <h2>Năm {new Date().getFullYear()}</h2>
                            <div className="details-content">
                                <p><b>{selectedPatient.name}</b></p>
                                <p>HS: {selectedPatient.id}</p>
                                <p>{selectedPatient.hospital}</p>
                            </div>
                        </div>
                    ) : (
                        <p>Chọn một bệnh nhân để xem chi tiết</p>
                    )}
                </div>
            </main>
        </div>
    );
}

export default PatientEdit;
