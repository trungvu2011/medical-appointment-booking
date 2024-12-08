import React, { useState, useEffect } from 'react';
import './Body.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faGem, faInbox } from '@fortawesome/free-solid-svg-icons';
import { faVialCircleCheck, faPumpMedical, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faUserMd, faHospital, faFlask, faAward } from '@fortawesome/free-solid-svg-icons';

function Body() {
    let doctorSlider = {
        desktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 600 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1
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

    let [specialties, setSpecialties] = useState([]);
    useEffect(() => {
        axios.get('/api/get-all-specialties')
            .then(response => {
                setSpecialties(response.data.data);
            })
            .catch(error => {
                console.error('There was an error fetching the specialty data!', error);
            });
    }, []);

    let renderspecialtyCards = () => {
        let cards = [];
        for (let i = 0; i < specialties.length; i++) {
            let specialty = specialties[i];
            console.log(specialty);
            cards.push(
                <div className="doctor-card" key={i}>
                    <img className="doctor-image" src={specialty.img} alt={specialty.name} />
                    <div className="doctor-name">{specialty.name}</div>
                    <div className="doctor-specialty">{specialty.description}</div>
                </div>
            );
        }
        return cards;
    }

    let viewMorespecialty = () => {
        navigate('/specialties');
    }

    return (
        <div className='body-container'>
            <div className='banner-container'>
                <div className='welcome'>
                    <h2>WELCOME TO E-HOSPITAL</h2>
                    <p>We are team of talented designers making websites with Bootstrap</p>
                </div>
                <div className='content'>
                    <div className='why-box'>
                        <h3>Why Choose Us?</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                        </p>
                        <div className='learn-more'>
                            <a href='#'>Learn More</a>
                        </div>
                    </div>
                    <div className='info-box'>
                        <div className='box'>
                            <FontAwesomeIcon icon={faClipboardList} />
                            <h4>Corporis voluptates officia eiusmod</h4>
                            <p>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            </p>
                        </div>
                        <div className='box'>
                            <FontAwesomeIcon icon={faGem} />
                            <h4>Corporis voluptates officia eiusmod</h4>
                            <p>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            </p>
                        </div>
                        <div className='box'>
                            <FontAwesomeIcon icon={faInbox} />
                            <h4>Corporis voluptates officia eiusmod</h4>
                            <p>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <div className='about-us'>
                <img src={require('../assets/about-us-img.avif')}></img>
                <div className='about-content'>
                    <h2>About Us</h2>
                    <p>Dolor iure expedita id fuga asperiores qui sunt consequatur minima. Quidem voluptas deleniti. Sit quia molestiae quia quas qui magnam itaque veritatis dolores. Corrupti totam ut eius incidunt reiciendis veritatis asperiores placeat.</p>
                    <ul>
                        <li>
                            <FontAwesomeIcon className='icon' icon={faVialCircleCheck} />
                            <div>
                                <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                                <p>Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
                            </div>
                        </li>
                        <li>
                            <FontAwesomeIcon className='icon' icon={faPumpMedical} />
                            <div>
                                <h5>Magnam soluta odio exercitationem reprehenderi</h5>
                                <p>Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi</p>
                            </div>
                        </li>
                        <li>
                            <FontAwesomeIcon className='icon' icon={faHeartCircleXmark} />
                            <div>
                                <h5>Voluptatem et qui exercitationem</h5>
                                <p>Et velit et eos maiores est tempora et quos dolorem autem tempora incidunt maxime veniam</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="stats-container">
                <div className="stat-box">
                    <FontAwesomeIcon className='stat-icon' icon={faUserMd} />
                    <h2>85</h2>
                    <p>Doctors</p>
                </div>
                <div className="stat-box">
                    <FontAwesomeIcon className='stat-icon' icon={faHospital} />
                    <h2>18</h2>
                    <p>Departments</p>
                </div>
                <div className="stat-box">
                    <FontAwesomeIcon className='stat-icon' icon={faFlask} />
                    <h2>12</h2>
                    <p>Research Labs</p>
                </div>
                <div className="stat-box">
                    <FontAwesomeIcon className='stat-icon' icon={faAward} />
                    <h2>150</h2>
                    <p>Awards</p>
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

            <div className='doctor-container'>
                <div className='doctor-header'>
                    <h2 className="doctor-title">Chuyên khoa</h2>
                    <div className="doctor-view-more">
                        <button className="view-more-button" onClick={viewMorespecialty}>Xem thêm</button>
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
                    {renderspecialtyCards()}
                </Carousel>
            </div>

        </div>
    );
}

export default Body;
