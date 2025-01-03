import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function ModalRegister({ isOpen, onClose }) {
    const [citizen_id, setCitizenId] = useState('');
    const [healthInsurance, setHealthInsurance] = useState('');
    const [address, setAddress] = useState('');
    const [birthday, setBirthday] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Reset form when modal is closed
    useEffect(() => {
        if (!isOpen) {
            setName('');
            setGender('');
            setPhone('');
            setPassword('');
            setCitizenId('');
            setHealthInsurance('');
            setBirthday('');
            setAddress('');
            setLoading(false);
            setError('');
        }
    }, [isOpen]);

    let handleSubmit = (e) => {
        e.preventDefault();

        if (!gender) {
            setError('Vui lòng chọn giới tính');
            return;
        }

        setLoading(true);
        setError(''); // Reset any previous error

        let requestData = {
            name: name,
            gender: gender,
            phone: phone,
            password: password,
            citizen_id: citizen_id,
            healthInsurance: healthInsurance,
            birthday: birthday,
            address: address,
        };

        axios.post('/api/register', requestData)
            .then(response => {
                console.log('Đăng ký:', response.data);
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

                    <Form.Group controlId="gender" className="mb-3">
                        <Form.Label>Giới tính</Form.Label>
                        <div>
                            <Form.Check
                                type="radio"
                                id="male"
                                label="Nam"
                                value="Male"
                                checked={gender === 'Male'}
                                onChange={(e) => setGender(e.target.value)}
                                inline
                            />
                            <Form.Check
                                type="radio"
                                id="female"
                                label="Nữ"
                                value="Female"
                                checked={gender === 'Female'}
                                onChange={(e) => setGender(e.target.value)}
                                inline
                            />
                        </div>
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

                    <Form.Group controlId="birthday" className="mb-3 d-flex flex-column">
                        <Form.Label>Ngày sinh</Form.Label>
                        <DatePicker
                            selected={birthday ? new Date(birthday) : null} // Chuyển đổi chuỗi yyyy-mm-dd thành Date
                            onChange={(date) => {
                                if (date) {
                                    // Chuyển đổi ngày từ Date sang định dạng yyyy-mm-dd
                                    const formattedDate = date.toISOString().split('T')[0];
                                    setBirthday(formattedDate);
                                } else {
                                    setBirthday('');
                                }
                            }}
                            dateFormat="dd-MM-yyyy" // Hiển thị định dạng dd-MM-yyyy
                            className="form-control form-control-lg" // Thêm class form-control để giống các trường khác
                            placeholderText="Nhập ngày sinh"
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

                    <Form.Group controlId="healthInsurance" className="mb-3">
                        <Form.Label>Bảo hiểm y tế</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nhập Bảo hiểm y tế"
                            value={healthInsurance}
                            onChange={(e) => setHealthInsurance(e.target.value)}
                            required
                            className="form-control-lg"
                        />
                    </Form.Group>

                    <Form.Group controlId="address" className="mb-3">
                        <Form.Label>Địa chỉ</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nhập Địa chỉ"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
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
