import React, { useState, useEffect } from 'react';
import './Doctor.scss';
import axios from 'axios';

function Doctor() {
    const [doctors, setDoctors] = useState([]);
    const [specialties, setSpecialties] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [searchSpecialty, setSearchSpecialty] = useState('');
    const [searchLevel, setSearchLevel] = useState('');
    const [levels, setLevels] = useState([]);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const doctorResponse = await axios.get('/api/get-all-doctors');
                const fetchedDoctors = doctorResponse.data.data;

                // Tạo bản sao và thay đổi aca_rank
                const updatedDoctors = fetchedDoctors.map((doctor) => {
                    if ((doctor.deg === 'GS' || doctor.deg === 'PGS') && doctor.aca_rank) {
                        doctor.aca_rank = 'TS';
                        doctor.academic_rank = 'Tiến sĩ';
                    }
                    if (doctor.degree && doctor.academic_rank) {
                        doctor.level = `${doctor.degree} ${doctor.academic_rank}`;
                    } else if (doctor.degree) {
                        doctor.level = doctor.degree;
                    } else if (doctor.academic_rank) {
                        doctor.level = doctor.academic_rank;
                    }

                    // Kiểm tra xem level đã có trong mảng levels chưa
                    setLevels((prevLevels) => {
                        if (!prevLevels.includes(doctor.level)) {
                            return [...prevLevels, doctor.level]; // Nếu chưa có, thêm mới
                        }
                        return prevLevels; // Nếu có rồi, không thêm
                    });

                    return doctor;
                });

                setDoctors(updatedDoctors); // Cập nhật state với bản sao đã thay đổi
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


    const filteredDoctors = doctors.filter((doctor) => {
        return (
            doctor.name.toLowerCase().includes(searchName.toLowerCase()) &&
            doctor.specialty.toLowerCase().includes(searchSpecialty.toLowerCase()) &&
            (searchLevel === '' || doctor.level.toLowerCase().includes(searchLevel.toLowerCase()))
        );
    });

    return (
        <div className="doctor-container">
            <h1>Danh sách bác sĩ</h1>

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
                <select
                    value={searchLevel}
                    onChange={(e) => setSearchLevel(e.target.value)}
                >
                    <option value="">Tất cả học hàm học vị</option>
                    {levels.map((level) => (
                        <option key={level} value={level}>
                            {level}
                        </option>
                    ))}
                </select>
            </div>

            <div className="doctor-list">
                {filteredDoctors.length > 0 ? (
                    filteredDoctors.map((doctor) => (
                        <div key={doctor.id} className="doctor-card">
                            <img src={doctor.img} alt={doctor.name} className="doctor-image" />
                            <div className="doctor-info">
                                <h3 className="doctor-name">{doctor.deg} {doctor.aca_rank} {doctor.name}</h3>
                                <p className="doctor-specialty">{doctor.specialty}</p>
                                <button className="detail-button">Xem chi tiết</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-results">Không tìm thấy bác sĩ phù hợp</p>
                )}
            </div>
        </div>
    );
}

export default Doctor;
