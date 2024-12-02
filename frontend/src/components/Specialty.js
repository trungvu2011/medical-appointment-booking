import React, { useState, useEffect } from 'react';
import './Specialty.scss';
import axios from 'axios';

function Specialty() {
    const [specialties, setSpecialties] = useState([]);

    useEffect(() => {
        const fetchSpecialties = async () => {
            try {
                const response = await axios.get('/api/get-all-specialties');
                setSpecialties(response.data.data);
            } catch (error) {
                console.error('Error fetching specialties:', error);
            }
        };
        fetchSpecialties();
    }, []);

    return (
        <div className="specialty-container">
            <h1 className="specialty-title">Danh sách chuyên khoa</h1>
            <div className="specialty-list">
                {specialties.length > 0 ? (
                    specialties.map((specialty) => (
                        <div key={specialty.id} className="specialty-card">
                            <img src={specialty.img} alt={specialty.name} className="specialty-image" />
                            <div className="specialty-info">
                                <h2 className="specialty-name">{specialty.name}</h2>
                                <p className="specialty-description">{specialty.description}</p>
                                <button className="detail-button">Xem chi tiết</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-results">Không có chuyên khoa nào</p>
                )}
            </div>
        </div>
    );
}

export default Specialty;
