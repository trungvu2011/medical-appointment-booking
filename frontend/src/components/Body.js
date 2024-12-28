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

    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        axios.get('/api/get-all-news')
            .then(res => {
                setNewsList(res.data.slice(0, 3));
            })
            .catch(err => {
                console.log(err);
            });


    }, []);

    let renderNews = newsList.map((news, index) => {
        return (
            <div className='item-news'>
                <div className='title-item-news'>
                    <h4>Tin tức - Sự kiện</h4>
                </div>
                <div className='news-box'>
                    <img src={news.imgUrl}></img>
                    <h3>{news.title}</h3>
                    <p className='date'>
                        {new Date(news.date).toLocaleString('en-GB', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                            second: '2-digit',
                            hour12: false
                        }).replace(',', '')}
                    </p>
                    <p>{news.content}</p>
                    <button className='detail'
                        onClick={() => navigate(`/news/${news.id}`)}
                    >Chi tiết</button>
                </div>
            </div>
        );
    });


    let renderDoctorCards = () => {
        let cards = [];
        for (let i = 0; i < doctors.length; i++) {
            let doctor = doctors[i];
            doctor.level = doctor.deg;
            if (doctor.aca_rank)
                doctor.level = doctor.aca_rank + ' ' + doctor.level;
            cards.push(
                <div className="doctor-card" key={i}
                    onClick={() => {
                        navigate(`/doctor/${doctor.id}`);
                    }}
                >
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
            cards.push(
                <div className="doctor-card" key={i}
                    onClick={() => navigate(`/specialty/${specialty.id}`, { state: { specialty } })}
                >
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
                </div>
                <div className='content'>
                    <div className='why-box'>
                        <h3>Why Choose Us?</h3>
                        <p>
                            Chúng tôi là bệnh viện hàng đầu với sứ mệnh mang lại dịch vụ y tế chất lượng cao cho cộng đồng. Với đội ngũ y bác sĩ giàu kinh nghiệm và các chuyên khoa đa dạng, chúng tôi cam kết đồng hành chăm sóc sức khỏe toàn diện cho bạn.
                        </p>
                        <div className='learn-more'>
                            <a href='#about-us'>Tìm hiểu thêm</a>
                        </div>
                    </div>
                    <div className='info-box'>
                        <div className='box'>
                            <FontAwesomeIcon icon={faClipboardList} />
                            <h4>Tiện ích vượt trội</h4>
                            <p>Đảm bảo trải nghiệm tốt nhất với các dịch vụ y tế chất lượng cao và đội ngũ bác sĩ chuyên môn.</p>
                        </div>
                        <div className='box'>
                            <FontAwesomeIcon icon={faGem} />
                            <h4>Hệ thống hiện đại</h4>
                            <p>Cung cấp công nghệ y khoa tiên tiến giúp chẩn đoán và điều trị hiệu quả.</p>
                        </div>
                        <div className='box'>
                            <FontAwesomeIcon icon={faInbox} />
                            <h4>Dịch vụ tận tâm</h4>
                            <p>Đội ngũ y bác sĩ tận tâm, luôn sẵn sàng hỗ trợ bạn với thái độ chuyên nghiệp.</p>
                        </div>

                    </div>
                </div>
            </div>

            <div id='about-us' className='about-us'>
                <img src={require('../assets/about-us-img.avif')}></img>
                <div className='about-content'>
                    <h2>About Us</h2>
                    <p>Chúng tôi là bệnh viện hàng đầu với sứ mệnh mang lại dịch vụ y tế chất lượng cao cho cộng đồng. Với đội ngũ y bác sĩ giàu kinh nghiệm và các chuyên khoa đa dạng, chúng tôi cam kết đồng hành chăm sóc sức khỏe toàn diện cho bạn.</p>
                    <ul>
                        <li>
                            <FontAwesomeIcon className='icon' icon={faVialCircleCheck} />
                            <div>
                                <h5>Chăm sóc toàn diện</h5>
                                <p>Cam kết cung cấp các dịch vụ chẩn đoán và điều trị phù hợp nhất với từng bệnh nhân.</p>
                            </div>
                        </li>
                        <li>
                            <FontAwesomeIcon className='icon' icon={faPumpMedical} />
                            <div>
                                <h5>Công nghệ tiên tiến</h5>
                                <p>Ứng dụng các công nghệ y tế hiện đại nhằm nâng cao hiệu quả điều trị và an toàn.</p>
                            </div>
                        </li>
                        <li>
                            <FontAwesomeIcon className='icon' icon={faHeartCircleXmark} />
                            <div>
                                <h5>Công nghệ và quy trình chuẩn hóa</h5>
                                <p>Ứng dụng công nghệ hiện đại giúp chẩn đoán và điều trị chính xác, an toàn.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div id='news' className='news-container'>
                <div className="news-header">
                    <h1>TIN TỨC</h1>
                    <p>Những tin tức được cập nhật hàng ngày tại E-HOSPITAL</p>
                </div>
                <div className='news-home-content'>
                    {renderNews}
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
