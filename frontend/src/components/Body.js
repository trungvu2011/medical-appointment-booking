import React, { useState, useEffect } from 'react';
import './Body.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Body() {
    let doctorSlider = {
        desktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 4
        }
    };

    let [doctors, setDoctors] = useState([]);
    useEffect(() => {
        axios.get('/api/get-all-doctors')
            .then(response => {
                setDoctors(response.data.data);
            })
            .catch(error => {
                console.error('There was an error fetching the doctor data!', error);
            });
    }, []);

    let renderDoctorCards = () => {
        let cards = [];
        console.log('Doctors:', doctors);
        console.log('Length: ', doctors.length);
        for (let i = 0; i < doctors.length; i++) {
            let doctor = doctors[i];
            if (doctor.level !== 'PGS' && doctor.level !== 'GSTS' && doctor.level !== 'ThsBS') continue;
            console.log(doctor);
            cards.push(
                <div className="doctor-card" key={i}>
                    <img className="doctor-image" src={doctor.img} alt={doctor.name} />
                    <div className="doctor-name">{doctor.level} {doctor.name}</div>
                    <div className="doctor-specialty">{doctor.specialty}</div>
                </div>
            );
        }
        return cards;
    }

    let navigate = useNavigate();
    let viewMoreDoctor = () => {
        navigate('/doctors');
    }

    return (
        <div className='body-container'>
            <div className="health-banner">
                <div className="content">
                    <h1 className="title">Cuộc sống khỏe mạnh là hạnh phúc lớn nhất</h1>
                    <div className="stats">
                        <div className="stat-item">
                            <h2>123</h2>
                            <p>Expert Doctors</p>
                        </div>
                        <div className="stat-item">
                            <h2>1234</h2>
                            <p>Medical Staff</p>
                        </div>
                        <div className="stat-item">
                            <h2>12345</h2>
                            <p>Total Patients</p>
                        </div>
                    </div>
                </div>
                <div className="image-container">
                    <img src={require('../assets/banner.jpg')} alt="Doctors" />
                </div>
            </div>

            <div className='doctor-container'>
                <div className='doctor-header'>
                    <h2 className="doctor-title">Bác sĩ nổi bật</h2>
                    <div className="doctor-view-more">
                        <button className="view-more-button" onClick={viewMoreDoctor}>Xem thêm</button>
                    </div>
                </div>
                <Carousel
                    responsive={doctorSlider}
                    infinite
                    autoPlay
                    autoPlaySpeed={3000}
                    showDots={false}
                    arrows={true}
                >
                    {renderDoctorCards()}
                </Carousel>
            </div>

        </div>
    );
}

export default Body;
