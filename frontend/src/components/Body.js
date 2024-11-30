import React, { useState, useEffect } from 'react';
import './Body.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Body() {
    let banner = {
        desktop: {
            breakpoint: { max: 4000, min: 0 },
            items: 1
        }
    };

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
            <Carousel
                responsive={banner}
                infinite
                autoPlay
                autoPlaySpeed={3000}
                showDots={true}
                arrows={true}
            >
                <div className="item">
                    <img src={require('../assets/banner1.jpg')} alt="Banner 1" />
                </div>
                <div className="item">
                    <img src={require('../assets/banner2.jpg')} alt="Banner 2" />
                </div>
            </Carousel>

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
