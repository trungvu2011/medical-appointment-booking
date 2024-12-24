import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function ModalEdit({ isOpen, onClose, patient, onUpdateSuccess }) {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [citizenId, setCitizenId] = useState('');
    const [address, setAddress] = useState('');
    const [birthday, setBirthday] = useState('');
    const [HI, setHI] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (isOpen && patient) {
            setId(patient.id);
            setName(patient.name);
            setCitizenId(patient.citizen_id);
            setBirthday(patient.birthday.substring(0, 10));
            setAddress(patient.address);
            setHI(patient.healthInsurance);
            setError('');
            setLoading(false);
        }
    }, [isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestData = {
            id: id,
            name: name,
            phone: patient.phone,
            citizen_id: citizenId,
            address: address,
            healthInsurance: HI,
            birthday: birthday
        };

        // console.log('requestData:', requestData);

        axios
            .post('/api/edit-user-info', requestData)
            .then((response) => {
                if (!response.data.errCode) {
                    let userData = JSON.parse(localStorage.getItem('user'));
                    if (requestData.id === userData.id) {
                        localStorage.setItem('user', JSON.stringify(requestData));
                    }
                    onUpdateSuccess();
                    onClose();
                    window.location.reload();
                } else {
                    setError(response.data.errMessage || 'Đã xảy ra lỗi!');
                }
            })
            .catch((err) => {
                setError('Đã xảy ra lỗi khi kết nối đến server!');
                console.error(err);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <Modal show={isOpen} onHide={onClose} centered size="lg">
            <Modal.Header closeButton className="bg-primary text-white">
                <Modal.Title className="w-100 text-center">Chỉnh sửa thông tin</Modal.Title>
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

                    {/* <Form.Group controlId="phone" className="mb-3">
                        <Form.Label>Số điện thoại</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nhập số điện thoại của bạn"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            className="form-control-lg"
                        />
                    </Form.Group> */}

                    <Form.Group controlId="citizenId" className="mb-3">
                        <Form.Label>Căn cước công dân</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nhập căn cước công dân"
                            value={citizenId}
                            onChange={(e) => setCitizenId(e.target.value)}
                            required
                            className="form-control-lg"
                        />
                    </Form.Group>

                    <Form.Group controlId="address" className="mb-3">
                        <Form.Label>Địa chỉ</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nhập địa chỉ"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
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

                    <Form.Group controlId="HI" className="mb-3">
                        <Form.Label>BHYT</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nhập mã BHYT"
                            value={HI}
                            onChange={(e) => setHI(e.target.value)}
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
                            {loading ? 'Đang cập nhật...' : 'Cập nhật'}
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default ModalEdit;
