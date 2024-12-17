import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function ModalLogin({ isOpen, onClose }) {
    let [phone, setPhone] = useState('');
    let [password, setPassword] = useState('');
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState('');

    useEffect(() => {
        if (!isOpen) {
            setPhone('');
            setPassword('');
            setLoading(false);
            setError('');
        }
    }, [isOpen]);

    let handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        setError(''); // Reset error when trying to submit

        let requestData = {
            phone: phone,
            password: password
        };

        axios.post('/api/login', requestData)
            .then(response => {
                if (response.data.errCode === 0) {
                    localStorage.setItem('user', JSON.stringify(response.data.user));
                    setLoading(false);
                    onClose();
                    window.location.reload();
                } else {
                    console.error('Đăng nhập thất bại:', response.data);
                    setLoading(false);
                    setError('Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin đăng nhập.');
                }

            })
            .catch(error => {
                console.error('Lỗi khi đăng nhập:', error);
                setLoading(false);
                setError('Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin đăng nhập.');
            });
    };

    return (
        <Modal show={isOpen} onHide={onClose} centered size="lg">
            <Modal.Header closeButton className="bg-primary text-white">
                <Modal.Title className="w-100 text-center">Đăng nhập</Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-5 py-4">
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="phone" className="mb-3">
                        <Form.Label>Số điện thoại</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nhập số điện thoại của bạn"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            className="form-control-lg"
                        />
                    </Form.Group>

                    <Form.Group controlId="password" className="mb-3">
                        <Form.Label>Mật khẩu</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Nhập mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="form-control-lg"
                        />
                    </Form.Group>

                    {error && (
                        <div className="alert alert-danger mt-3" role="alert">
                            {error}
                        </div>
                    )}

                    <div className="d-flex justify-content-between mt-4">
                        <Button
                            variant="secondary"
                            onClick={onClose}
                            className="btn-lg"
                        >
                            Hủy
                        </Button>
                        <Button
                            variant="primary"
                            type="submit"
                            className="btn-lg"
                            disabled={loading}
                        >
                            {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default ModalLogin;
