import React, { useState, useEffect } from 'react';
import './Header.scss';
import ModalLogin from './ModalLogin';
import ModalRegister from './ModalRegister';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Header() {
    let [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    let [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

    let openLoginModal = () => setIsLoginModalOpen(true);
    let closeLoginModal = () => setIsLoginModalOpen(false);

    let openRegisterModal = () => setIsRegisterModalOpen(true);
    let closeRegisterModal = () => setIsRegisterModalOpen(false);

    let [isLogin, setLogin] = useState(false);
    let [userName, setUserName] = useState('');

    useEffect(() => {
        try {
            let storedUser = localStorage.getItem('user');
            if (storedUser) {
                const parsedUser = JSON.parse(storedUser);
                if (parsedUser?.name) {
                    setLogin(true);
                    setUserName(parsedUser.name);
                } else {
                    console.error('Dữ liệu người dùng không hợp lệ:', parsedUser);
                }
            }
        } catch (error) {
            console.error('Lỗi khi parse JSON từ localStorage:', error);
        }
    }, []);

    let handleLoginSuccess = (name) => {
        setUserName(name);
    }

    let handleLogout = () => {
        localStorage.removeItem('user');
        setLogin(false);
        setUserName('');
    }

    return (
        <header className="header">
            <div className="logo">
                <a href='/'>
                    <img src={require('../assets/logo.png')} alt="Bệnh viện DH Y Hà Nội" />
                </a>
            </div>
            <div className="header-right">
                <span className="hotline">Hotline:<strong>1900 6422</strong></span>
                {isLogin ? (
                    <div className="auth-links">
                        <div className="user-info">
                            <FontAwesomeIcon className='user-icon' icon={faUser} />
                            <span className="user-name">{userName}</span>
                            {/* Nút đăng xuất */}
                            <div onClick={handleLogout} className="logout-button">
                                Đăng xuất
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="auth-links">
                        <a href="#" onClick={openRegisterModal}>Đăng ký mới</a>
                        <span>|</span>
                        <a href="#" onClick={openLoginModal} className='login'>Đăng nhập</a>
                    </div>
                )}
            </div>

            <ModalLogin isOpen={isLoginModalOpen} onClose={closeLoginModal} />
            <ModalRegister isOpen={isRegisterModalOpen} onClose={closeRegisterModal} />
        </header>
    );
}

export default Header;
