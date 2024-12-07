import React, { useState, useEffect } from 'react';
import './SelectDate.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserDoctor, faNotesMedical } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Hàm tạo dữ liệu từ thứ 2 đến chủ nhật
async function generateWeeksData(doctor_id, weeksToGenerate = 4) {
    let weeks = [];
    try {
        const response = await axios.get('/api/get-date-list-by-doctor', { params: { doctor_id } });
        const dateList = response.data;

        // Mảng các ngày trong tuần
        let weekdays = ['CN', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];

        // Hàm tạo dữ liệu cho từng tuần
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

    let [weeks, setWeeks] = useState([]); // Danh sách các tuần
    let [currentWeek, setCurrentWeek] = useState(0); // Tuần hiện tại
    let [selectedDate, setSelectedDate] = useState(null);
    let [selectedTime, setSelectedTime] = useState(null);
    let [isDateVisible, setIsDateVisible] = useState(false); // Quản lý việc hiển thị lịch

    useEffect(() => {
        const fetchData = async () => {
            let weeksData = await generateWeeksData(doctor.id, 4); // Gọi hàm bất đồng bộ
            setWeeks(weeksData);
        };
        fetchData();
    }, [doctor.id]); // Chỉ gọi lại khi doctor.id thay đổi

    let handleContinue = () => {
        if (selectedDate && selectedTime) {
            navigate('/confirm-appointment', {
                state: {
                    patient,
                    doctor,
                    appointment: {
                        date: selectedDate.date, // Ngày (dd/mm/yyyy)
                        day: selectedDate.day,   // Thứ
                        time: selectedTime,      // Giờ
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
        setIsDateVisible((prev) => !prev); // Chuyển đổi trạng thái hiển thị lịch
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

                {/* Thẻ chuyên khoa và giá khám */}
                <div className="doctor-specialty" onClick={toggleDateVisibility}>
                    <FontAwesomeIcon className="specialty-icon" icon={faNotesMedical} />
                    <div className='specialty'>
                        <div className="specialty-name">{doctor?.specialty}</div>
                        <div className="specialty-price">{doctor?.price_service} VND</div>
                    </div>
                    <FontAwesomeIcon className="specialty-select" icon={faChevronRight} />
                </div>

                {/* Hiển thị lịch chỉ khi click vào thẻ chuyên khoa */}
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
                            // Tạo đối tượng Date từ date.date (chỉ có ngày-tháng) và thêm năm hiện tại
                            let currentYear = new Date().getFullYear();
                            let dateParts = date.date.split('/');
                            let selectedDate = new Date(`${currentYear}/${dateParts[1]}/${dateParts[0]}`);
                            selectedDate.setHours(0, 0, 0, 0);
                            let currentDate = new Date();
                            currentDate.setHours(0, 0, 0, 0);

                            let isPastDate = selectedDate < currentDate;
                            let isAvailable = date.slots.length > 0;
                            let isNotAvailable = isPastDate || !isAvailable;

                            return (
                                <div
                                    key={date.date}
                                    className={`date-card ${selectedDate.getTime() === new Date(date.date).getTime() ? 'selected' : ''} ${isNotAvailable ? 'not-available' : ''}`}
                                    onClick={!isNotAvailable ? () => setSelectedDate({ date: date.date, day: date.day }) : undefined}
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
