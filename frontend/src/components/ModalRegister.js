import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function ModalRegister({ isOpen, onClose }) {
    let [citizen_id, setCitizenId] = useState('');
    let [name, setName] = useState('');
    let [phone, setPhone] = useState('');
    let [password, setPassword] = useState('');
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState('');

    // Reset form when modal is closed
    useEffect(() => {
        if (!isOpen) {
            setName('');
            setPhone('');
            setPassword('');
            setCitizenId('');
            setLoading(false);
            setError('');
        }
    }, [isOpen]);

    let handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        setError(''); // Reset any previous error

        let requestData = {
            name: name,
            phone: phone,
            password: password,
            citizen_id: citizen_id
        };

        console.log('requestData:', requestData);

        axios.post('/api/register', requestData)
            .then(response => {
                if (!response.data.errCode) {
                    // Đăng ký thành công
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('user', JSON.stringify(response.data.user));
                    onClose();
                } else {
                    console.error('Tài khoản đã tồn tại:', response.data);
                    setLoading(false);
                    setError('Đăng ký thất bại. Số điện thoại hoặc CCCD đã tồn tại trong hệ thống.');
                }
            })
            .catch(error => {
                console.error('Lỗi khi đăng ký:', error);
                setLoading(false);
                setError('Đăng ký thất bại. Vui lòng kiểm tra lại thông tin.');
            });
    };

    return (
        <Modal show={isOpen} onHide={onClose} centered size="lg">
            <Modal.Header closeButton className="bg-primary text-white">
                <Modal.Title className="w-100 text-center">Đăng ký ngay</Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-5 py-4">
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="name" className="mb-3">
                        <Form.Label>Họ và Tên</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nhập họ và tên của bạn"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="form-control-lg"
                        />
                    </Form.Group>

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

                    <Form.Group controlId="citizen_id" className="mb-3">
                        <Form.Label>Căn cước công dân</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nhập căn cước công dân"
                            value={citizen_id}
                            onChange={(e) => setCitizenId(e.target.value)}
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
                            {loading ? 'Đang đăng ký...' : 'Đăng ký'}
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default ModalRegister;
