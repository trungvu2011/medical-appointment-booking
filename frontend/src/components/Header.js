import React, { useState } from 'react';
import './Header.scss';
import ModalLogin from './ModalLogin';
import ModalRegister from './ModalRegister';
import { Button } from 'react-bootstrap';

function Header() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

    const openLoginModal = () => setIsLoginModalOpen(true);
    const closeLoginModal = () => setIsLoginModalOpen(false);

    const openRegisterModal = () => setIsRegisterModalOpen(true);
    const closeRegisterModal = () => setIsRegisterModalOpen(false);

    return (
        <header className="header">
            <div className="logo">
                <img src="https://benhviendaihocyhanoi.isofhcare.vn/image/hospital/dhyhanoi/logo.png" alt="Bệnh viện DH Y Hà Nội" />
            </div>
            <div className="header-right">
                <span className="hotline">Hotline: <strong>1900 6422</strong></span>
                <div className="auth-links">
                    <a href="#" onClick={openRegisterModal}>Đăng ký mới</a>
                    <span>|</span>
                    <a href="#" onClick={openLoginModal} className='login'>Đăng nhập</a>
                </div>
            </div>

            <ModalLogin isOpen={isLoginModalOpen} onClose={closeLoginModal} />
            <ModalRegister isOpen={isRegisterModalOpen} onClose={closeRegisterModal} />
        </header>
    );
}

export default Header;
