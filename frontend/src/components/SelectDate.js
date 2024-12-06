import React, { useState, useEffect } from 'react';
import './SelectDate.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserDoctor, faNotesMedical } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Hàm tạo dữ liệu từ thứ 2 đến chủ nhật
function generateWeeksData(doctor_id, weeksToGenerate = 4) {
    let weeks = [];
    let dateList = [];

    // Gửi request đến API để lấy dữ liệu lịch của bác sĩ
    axios.get('/api/get-date-list-by-doctor', { params: { doctor_id: doctor_id } })
        .then((response) => {
            dateList = response.data;

            // Mảng các ngày trong tuần
            let weekdays = ['CN', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];

            // Hàm tạo dữ liệu cho từng tuần
            let createWeekData = (weekStartDate) => {
                let weekData = [];
                for (let day = 0; day < 7; day++) {
                    let currentDate = new Date(weekStartDate);
                    currentDate.setDate(weekStartDate.getDate() + day); // Tính ngày trong tuần

                    let dayOfWeek = currentDate.getDay();
                    let dayLabel = weekdays[dayOfWeek];
                    let availableSlots = dateList
                        .filter(item => item.work_day === dayLabel) // Lọc các giờ làm việc cho ngày đó
                        .map(item => item.start_time); // Chỉ lấy thời gian

                    weekData.push({
                        date: currentDate.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit' }),
                        day: dayLabel,
                        slots: availableSlots,
                        isPast: currentDate < new Date(), // Kiểm tra ngày đã qua chưa
                    });
                }
                return weekData;
            };

            // Tạo dữ liệu cho các tuần
            let today = new Date();
            let currentDay = today.getDay();
            let mondayOffset = currentDay === 0 ? -6 : 1 - currentDay; // Lùi lại đến thứ 2 trong tuần
            today.setDate(today.getDate() + mondayOffset); // Đặt ngày đầu tuần

            for (let week = 0; week < weeksToGenerate; week++) {
                let weekStartDate = new Date(today);
                weekStartDate.setDate(today.getDate() + week * 7); // Tính ngày bắt đầu tuần
                weeks.push(createWeekData(weekStartDate)); // Tạo dữ liệu cho từng tuần
            }
        })
        .catch((error) => {
            console.error('Error fetching doctor schedule:', error);
        });

    console.log(weeks);

    return weeks; // Trả về dữ liệu tuần (chờ async)
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
        let weeksData = generateWeeksData(doctor.id, 4); // Tạo dữ liệu 4 tuần
        setWeeks(weeksData);
    }, []);

    let handleContinue = () => {
        if (selectedDate && selectedTime) {
            navigate('/next-step', {
                state: { patient, doctor, appointment: { date: selectedDate, time: selectedTime } },
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
                        <div className="specialty-price">{doctor?.price_service}VND</div>
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
                            let currentYear = new Date().getFullYear(); // Lấy năm hiện tại
                            let dateParts = date.date.split('-'); // Tách chuỗi ngày-tháng
                            let selectedDate = new Date(`${currentYear}-${dateParts[1]}-${dateParts[0]}`); // Tạo đối tượng Date đầy đủ

                            // Đặt giờ, phút, giây, mili giây của selectedDate và currentDate về 0 để so sánh chỉ theo ngày
                            selectedDate.setHours(0, 0, 0, 0);
                            let currentDate = new Date();
                            currentDate.setHours(0, 0, 0, 0); // Đặt giờ của ngày hiện tại về 00:00:00

                            // So sánh ngày
                            let isPastDate = selectedDate < currentDate; console.log(new Date().getTime());
                            let isAvailable = date.slots.length > 0; // Kiểm tra nếu ngày có lịch khám
                            let isNotAvailable = isPastDate || !isAvailable; // Xác định ngày không thể chọn
                            return (
                                <div
                                    key={date.date}
                                    className={`date-card ${selectedDate === date.date ? 'selected' : ''} ${isNotAvailable ? 'not-available' : ''}`}
                                    onClick={!isNotAvailable ? () => setSelectedDate(date.date) : undefined} // Chỉ cho phép click nếu ngày có thể chọn
                                >
                                    <div className="date-day">{date.day}</div>
                                    <div className="date-number">{date.date}</div>
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
                            .find((d) => d.date === selectedDate)
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
