import React from 'react';
import './Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src="https://benhviendaihocyhanoi.isofhcare.vn/image/hospital/dhyhanoi/logo-footer.png" alt="Bệnh viện DH Y Hà Nội" />
                </div>
                <div className="footer-info">
                    <h4>BỆNH VIỆN ĐH Y HÀ NỘI</h4>
                    <p>Cơ sở Tôn Thất Tùng: <strong>Số 1 Tôn Thất Tùng, Đống Đa, Hà Nội</strong></p>
                    <p>Cơ sở Cầu Giấy: <strong>Số 10 Trương Công Giai, Cầu Giấy, Hà Nội</strong></p>
                    <p>Email: <strong>benhviendaihocyhanoi@hmuh.vn</strong></p>
                    <p>Hotline: <strong>1900 6422</strong></p>
                </div>
            </div>
        </footer >
    );
}

export default Footer;
