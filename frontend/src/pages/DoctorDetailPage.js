import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DoctorDetail from '../components/DoctorDetail.js';

function DoctorDetailPage() {
    return (
        <div>
            <Header />
            <DoctorDetail />
            <Footer />
        </div>
    );
}

export default DoctorDetailPage;
