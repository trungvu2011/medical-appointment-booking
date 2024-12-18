import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function ModalEdit({ isOpen, onClose, patient,onUpdateSuccess }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [citizenId, setCitizenId] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        console.log(patient);
        if (isOpen && patient) {
            setName(patient.name);
            setPhone(patient.phone);
            setCitizenId(patient.citizen_id);
            setError('');
            setLoading(false);
        }
    }, [isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestData = {
            id: patient.id,
            name: name,
            phone: phone,
            citizen_id: citizenId,
        };

        console.log('requestData:', requestData);
        axios
            .post('/api/edit-user-info', requestData)
            .then((response) => {
                if (!response.data.errCode) {
                    console.log('Cập nhật thành công:', response.data);
                    let userData = JSON.parse(localStorage.getItem('user'));
                    if (requestData.id === userData.id){
                        localStorage.setItem('user', JSON.stringify(requestData));
                    }
                    onUpdateSuccess();
                    onClose();
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
