import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PatientRecord from '../components/PatientRecord';

function HomePage() {
    return (
        <div>
            <Header />
            <PatientRecord />
            <Footer />
        </div>
    );
}

export default HomePage;
