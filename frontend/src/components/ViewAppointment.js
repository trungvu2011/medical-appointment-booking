import React, { useState, useEffect } from 'react';
import './ViewAppointment.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faChevronRight, faHospital } from '@fortawesome/free-solid-svg-icons';
import ModalEdit from './ModalEdit';
import axios from 'axios';

function ViewAppointment() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [patientData, setPatientData] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [appointments, setAppointments] = useState([]);

    const [mainUser, setMainUser] = useState(JSON.parse(localStorage.getItem('user')));

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

    const fetchAppointments = async (patientData) => {
        try {
            const response = await axios.get('/api/get-appointments', {
                params: {
                    id: patientData.id
                },
            });
            setAppointments(response.data);
        } catch (error) {
            console.error('Lỗi khi lấy lịch khám:', error);
        }
    };

    useEffect(() => {
        fetchPatientData();
    }, []);

    const openModal = (patient) => {
        setSelectedPatient(patient);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedPatient(null);
        setIsModalOpen(false);
    };

    const handlePatientClick = (patient) => {
        setSelectedPatient(patient);
        fetchAppointments(patient);
    };

    const renderPatientCards = () => {
        return [
            <div className="patient-card" key="0" onClick={() => handlePatientClick(mainUser)}>
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
            </div>,
            ...patientData.map((patient) => (
                <div className="patient-card" key={patient.id} onClick={() => handlePatientClick(patient)}>
                    <FontAwesomeIcon className="patient-avatar" icon={faUser} />
                    <div className="patient-info">
                        <div className="patient-name">{patient.name}</div>
                        <div className="patient-details">SĐT: {patient.phone}</div>
                    </div>
                    <button
                        className="edit-button"
                        onClick={(e) => {
                            e.stopPropagation();
                            openModal(patient);
                        }}
                    >
                        Sửa
                    </button>
                </div>
            )),
        ];
    };

    const renderAppointments = () => {
        if (appointments.length === 0) {
            return <p>Không có lịch khám nào.</p>;
        }
        return appointments.map((appointment) => (
            <div className="appointment-card" key={appointment.id}>
                <div className="date-container">
                    <div className="day">{appointment.date.split('-')[2]}</div>
                    <div className="month-year">{appointment.date.split('-')[1]}/{appointment.date.split('-')[0]}</div>
                </div>
                <div className="appointment-info">
                    <p><b>Thời gian:</b> {appointment.start_time}</p>
                    <p><b>Triệu chứng:</b> {appointment.symptom}</p>
                    <p><b>Trạng thái:</b> {appointment.status === 'pending' ? 'Đang chờ' : 'Đã khám'}</p>
                </div>
            </div>
        ));
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
                            <h2>Lịch khám của {selectedPatient.name}</h2>
                            <div className="details-content">{renderAppointments()}</div>
                        </div>
                    ) : (
                        <p>Chọn một bệnh nhân để xem lịch khám</p>
                    )}
                </div>
            </main>
        </div>
    );
}

export default ViewAppointment;
