import React from 'react';
import './Header.scss';

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src="https://benhviendaihocyhanoi.isofhcare.vn/image/hospital/dhyhanoi/logo.png" alt="Bệnh viện DH Y Hà Nội" />
            </div>
            <div className="header-right">
                <span className="hotline">Hotline: <strong>1900 6422</strong></span>
                <div className="auth-links">
                    <a href="/register">Đăng ký mới</a>
                    <span>|</span>
                    <a href="/login" className='login'>Đăng nhập</a>
                </div>
            </div>
        </header>
    );
}

export default Header;
