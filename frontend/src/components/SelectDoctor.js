import React, { useState, useEffect } from 'react';
import './SelectDoctor.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const SelectDoctor = () => {
    const location = useLocation();
    const patient = location.state?.patient;

    const [doctors, setDoctors] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [specialties, setSpecialties] = useState([]);
    const [searchSpecialty, setSearchSpecialty] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const doctorResponse = await axios.get('/api/get-all-doctors');
                setDoctors(doctorResponse.data.data);
            } catch (error) {
                console.error('There was an error fetching the doctor data!', error);
            }
        };

        const fetchSpecialties = async () => {
            try {
                const specialtyResponse = await axios.get('/api/get-all-specialties');
                setSpecialties(specialtyResponse.data.data);
            } catch (error) {
                console.error('There was an error fetching the specialty data!', error);
            }
        };

        fetchDoctors();
        fetchSpecialties();
    }, []);

    let renderDoctorCards = () => {
        let cards = [];
        for (let i = 0; i < filteredDoctors.length; i++) {
            let doctor = filteredDoctors[i];
            cards.push(
                <div className="doctor-card" key={doctor.id} onClick={() => onSelect(doctor)}>
                    <div className='doctor-card-header'>
                        <img className='doctor-avatar' src={doctor.img} alt="doctor-avatar" />
                        <div className="doctor-info">
                            <div className="doctor-name">{doctor.name}</div>
                            <div className="doctor-details">
                                {doctor.specialty}
                            </div>
                        </div>
                        <FontAwesomeIcon className="doctor-select" icon={faChevronRight} />
                    </div>
                    <div className='doctor-price'>
                        <div className='price-text'>Giá khám: </div>
                        <div className='price-number'>{doctor.price_service} VND</div>
                    </div>
                </div>
            );
        }
        return cards;
    };

    const onSelect = (doctor) => {
        navigate('/select-date', { state: { patient: patient, doctor: doctor } });
    };

    const filteredDoctors = doctors.filter((doctor) => {
        return (
            doctor.name.toLowerCase().includes(searchName.toLowerCase()) &&
            doctor.specialty.toLowerCase().includes(searchSpecialty.toLowerCase())
        );
    });

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
                <div className='patient-container'>
                    <h5>Người tới khám</h5>
                    <div className='patient-info'>
                        <FontAwesomeIcon className='patient-avatar' icon={faUser} />
                        <div className='patient-name'>{patient?.name}</div>
                    </div>
                </div>
                <h5 className="search-title">Chọn bác sĩ</h5>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Tìm theo tên bác sĩ..."
                        value={searchName}
                        onChange={(e) => setSearchName(e.target.value)}
                    />
                    <select
                        value={searchSpecialty}
                        onChange={(e) => setSearchSpecialty(e.target.value)}
                    >
                        <option value="">Tất cả chuyên khoa</option>
                        {specialties.map((specialty) => (
                            <option key={specialty.id} value={specialty.name}>
                                {specialty.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="doctor-list">
                    {doctors.length > 0 ? renderDoctorCards() : <div>Không có dữ liệu bác sĩ</div>}
                </div>
            </div>
        </div>

    );
};

export default SelectDoctor;
