import React, { useState, useEffect } from 'react';
import './SelectDate.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserDoctor, faNotesMedical } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

async function generateWeeksData(doctor_id, weeksToGenerate = 4) {
    let weeks = [];
    try {
        const response = await axios.get('/api/get-date-list-by-doctor', { params: { doctor_id } });
        const dateList = response.data.dateList;
        const bookedDateList = response.data.bookedDateList;

        let weekdays = ['CN', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];

        const createWeekData = (weekStartDate) => {
            let weekData = [];
            for (let day = 0; day < 7; day++) {
                let currentDate = new Date(weekStartDate);
                currentDate.setDate(weekStartDate.getDate() + day);

                let dayOfWeek = currentDate.getDay();
                let dayLabel = weekdays[dayOfWeek];
                let availableSlots = dateList
                    .filter(item => item.work_day === dayLabel)
                    .map(item => item.start_time);

                for (let i = 0; i < bookedDateList.length; i++) {
                    let bookedDate = new Date(bookedDateList[i].date);
                    if (bookedDate.getDate() === currentDate.getDate()) {
                        let bookedTime = bookedDateList[i].start_time;
                        availableSlots = availableSlots.filter(slot => slot !== bookedTime);
                    }
                }

                weekData.push({
                    date: currentDate.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' }),
                    day: dayLabel,
                    slots: availableSlots,
                    isPast: currentDate < new Date(),
                });
            }
            return weekData;
        };

        let today = new Date();
        let currentDay = today.getDay();
        let mondayOffset = currentDay === 0 ? -6 : 1 - currentDay;
        today.setDate(today.getDate() + mondayOffset);

        for (let week = 0; week < weeksToGenerate; week++) {
            let weekStartDate = new Date(today);
            weekStartDate.setDate(today.getDate() + week * 7);
            weeks.push(createWeekData(weekStartDate));
        }
    } catch (error) {
        console.error('Error fetching doctor schedule:', error);
    }
    return weeks;
}

function SelectDate() {
    let location = useLocation();
    let navigate = useNavigate();
    let patient = location.state?.patient;
    let doctor = location.state?.doctor;
    let [adjustedPrice, setAdjustedPrice] = useState(doctor?.price_service);
    let [displayPrice, setDisplayPrice] = useState('');

    let [weeks, setWeeks] = useState([]);
    let [currentWeek, setCurrentWeek] = useState(0);
    let [selectedDate, setSelectedDate] = useState(null);
    let [selectedTime, setSelectedTime] = useState(null);
    let [isDateVisible, setIsDateVisible] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            let weeksData = await generateWeeksData(doctor.id, 4);
            setWeeks(weeksData);
        };
        fetchData();
    }, [doctor.id]);

    let handleContinue = () => {
        if (selectedDate && selectedTime) {
            navigate('/confirm-appointment', {
                state: {
                    patient,
                    doctor,
                    appointment: {
                        price: adjustedPrice,
                        date: selectedDate.date,
                        day: selectedDate.day,
                        time: selectedTime,
                    },
                },
            });
        } else {
            alert('Vui lòng chọn ngày và giờ!');
        }
    };

    let handlePreviousWeek = () => {
        if (currentWeek > 0) setCurrentWeek(currentWeek - 1);
    };

    let handleNextWeek = () => {
        if (currentWeek < weeks.length - 1) setCurrentWeek(currentWeek + 1);
    };

    let toggleDateVisibility = () => {
        setIsDateVisible((prev) => !prev);
    };

    let formatCurrency = (value) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value).replace('₫', 'VNĐ');
    };

    let handleDateSelect = (date) => {
        setSelectedDate({ date: date.date, day: date.day });

        if (date.day === 'Thứ 7' || date.day === 'CN') {
            let newPrice = Math.round(doctor?.price_service * 1.5);
            setAdjustedPrice(newPrice);
            setDisplayPrice(`${formatCurrency(newPrice)} (phụ phí ngoài giờ)`);
        } else {
            setAdjustedPrice(doctor?.price_service);
            setDisplayPrice(formatCurrency(doctor?.price_service));
        }
    };

    return (
        <div className="registration-page">
            <div className="background-banner">
                <h1 className="title">Đăng ký khám</h1>
            </div>

            <div className="registration-container">
                <div className="progress-steps">
                    <div className="step active">1</div>
                    <div className="step active">2</div>
                    <div className="step active">3</div>
                    <div className="step">4</div>
                </div>
                <h5 className="appointment-text">Người tới khám</h5>
                <div className="appointment-container">
                    <div className="patient-info">
                        <FontAwesomeIcon className="patient-avatar" icon={faUser} />
                        <div className="patient-name">{patient?.name}</div>
                    </div>
                    <div className="doctor-info">
                        <FontAwesomeIcon className="doctor-avatar" icon={faUserDoctor} />
                        <div className="doctor">
                            <div className="doctor-text">Bác sĩ</div>
                            <div className="doctor-name">{doctor?.level + ' ' + doctor?.name}</div>
                        </div>
                    </div>
                </div>
                <h5 className="select-date-text">Chọn ngày khám</h5>

                <div className="doctor-specialty" onClick={toggleDateVisibility}>
                    <FontAwesomeIcon className="specialty-icon" icon={faNotesMedical} />
                    <div className='specialty'>
                        <div className="specialty-name">{doctor?.specialty}</div>
                        <div className="specialty-price">{displayPrice || formatCurrency(adjustedPrice)}</div>
                    </div>
                    <FontAwesomeIcon className="specialty-select" icon={faChevronRight} />
                </div>

                {isDateVisible && (
                    <div className="date-list">
                        <button
                            className="date-navigator"
                            onClick={handlePreviousWeek}
                            disabled={currentWeek === 0}
                        >
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        {weeks[currentWeek]?.map((date) => {
                            let [day, month, year] = date.date.split('/').map(Number);
                            let selectedDateObj = new Date(year, month - 1, day);
                            selectedDateObj.setHours(0, 0, 0, 0);

                            let currentDate = new Date();
                            currentDate.setHours(0, 0, 0, 0);

                            let isPastDate = selectedDateObj <= currentDate;
                            let isAvailable = date.slots.length > 0;
                            let isNotAvailable = isPastDate || !isAvailable;

                            return (
                                <div
                                    key={date.date}
                                    className={`date-card ${selectedDate?.date === date.date ? 'selected' : ''} ${isNotAvailable ? 'not-available' : ''}`}
                                    onClick={!isNotAvailable ? () => handleDateSelect(date) : undefined}
                                >
                                    <div className="date-day">{date.day}</div>
                                    <div className="date-number">{date.date.slice(0, 5)}</div>
                                </div>
                            );
                        })}

                        <button
                            className="date-navigator"
                            onClick={handleNextWeek}
                            disabled={currentWeek === weeks.length - 1}
                        >
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                )}

                {selectedDate && (
                    <div className="time-list">
                        {weeks[currentWeek]
                            .find((d) => d.date === selectedDate.date)
                            ?.slots.map((slot) => (
                                <button
                                    key={slot}
                                    className={`time-slot ${selectedTime === slot ? 'selected' : ''}`}
                                    onClick={() => setSelectedTime(slot)}
                                >
                                    {slot}
                                </button>
                            ))}
                    </div>
                )}

                <button className="continue-button" onClick={handleContinue} disabled={!selectedDate || !selectedTime}>
                    Tiếp tục
                </button>
            </div>
        </div>
    );
}

export default SelectDate;
