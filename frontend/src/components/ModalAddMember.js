import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function ModalAddMember({ isOpen, onClose }) {
    let [citizen_id, setCitizenId] = useState('');
    let [name, setName] = useState('');
    let [phone, setPhone] = useState('');
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState('');

    // Reset form when modal is closed
    useEffect(() => {
        if (!isOpen) {
            setName('');
            setPhone('');
            setCitizenId('');
            setLoading(false);
            setError('');
        }
    }, [isOpen]);

    let handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        setError('');

        let user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            setError('Vui lòng đăng nhập để thêm thành viên');
            setLoading(false);
            return;
        }

        let requestData = {
            user_id: user.id,
            name: name,
            phone: phone,
            citizen_id: citizen_id
        };

        console.log('Data to send:', requestData);

    };

    return (
        <Modal show={isOpen} onHide={onClose} centered size="lg">
            <Modal.Header closeButton className="bg-primary text-white">
                <Modal.Title className="w-100 text-center">Thêm thành viên</Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-5 py-4">
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="name" className="mb-3">
                        <Form.Label>Họ và Tên</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nhập họ và tên"
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
                            placeholder="Nhập số điện thoại"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
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
                            Lưu lại
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default ModalAddMember;
