import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PatientEdit from '../components/PatientEdit';

function EditPage() {
    return (
        <div>
            <Header />
            <PatientEdit/>
            <Footer />
        </div>
    );
}

export default EditPage;
