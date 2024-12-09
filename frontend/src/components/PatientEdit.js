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

    let [mainUser, setMainUser] = useState(JSON.parse(localStorage.getItem('user')));

    const fetchPatientData = async () => {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (!userData) return;
        setMainUser(userData);

        try {
            const response = await axios.get('/api/get-all-members', {
                params: {
                    id: userData.id,
                    phone: userData.phone,
                    name: userData.name,
                    citizen_id: userData.citizen_id,
                },
            });
            setPatientData(response.data);
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu bệnh nhân:', error);
        }
    };

    useEffect(() => {
        fetchPatientData();
    }, []);

    let openModal = (patient) => {
        setSelectedPatient(patient);
        setIsModalOpen(true);
    };

    let closeModal = () => {
        setSelectedPatient(null);
        setIsModalOpen(false);
    };

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

    let renderPatientCards = () => {
        let cards = [];
        cards.push(
            <div className="patient-card" key="0">
                <FontAwesomeIcon className="patient-avatar" icon={faUser} />
                <div className="patient-info">
                    <div className="patient-name">{mainUser.name}</div>
                    <div className="patient-details">SĐT: {mainUser.phone}</div>
                </div>
                <button
                    className="edit-button"
                    onClick={(e) => {
                        e.stopPropagation();
                        openModal(mainUser);
                    }}
                >
                    Sửa
                </button>
                <ModalEdit isOpen={isModalOpen} onClose={closeModal} patient={selectedPatient} onUpdateSuccess={fetchPatientData} />
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
                    <ModalEdit isOpen={isModalOpen} onClose={closeModal} patient={selectedPatient} onUpdateSuccess={fetchPatientData} />
                </div>
            );
        };
        return cards;
    };

    return (
        <div className="patient-edit">
            <main className="content">
                <div className="sidebar">
                    <div className="patient-list">{renderPatientCards()}</div>
                </div>
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
