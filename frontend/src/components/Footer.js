import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospital } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="logo">
                    <a href='/home'>
                        <FontAwesomeIcon className='hospital-icon' icon={faHospital} />
                        <h2 className="hospital-name">E-Hospital</h2>
                    </a>
                </div>
                <div className="footer-info">
                    <h4>E - HOSPITAL</h4>
                    <p>Cơ sở 1: <strong>Số 1 Tôn Thất Tùng, Đống Đa, Hà Nội</strong></p>
                    <p>Cơ sở 2: <strong>Số 10 Trương Công Giai, Cầu Giấy, Hà Nội</strong></p>
                    <p>Email: <strong>benhviendaihocyhanoi@hmuh.vn</strong></p>
                    <p>Hotline: <strong>1900 6422</strong></p>
                </div>
            </div>
        </footer >
    );
}

export default Footer;
