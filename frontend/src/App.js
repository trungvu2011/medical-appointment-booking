import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import SelectPatientPage from './pages/SelectPatientPage';
import SelectDoctorPage from './pages/SelectDoctorPage.js';
import SelectDatePage from './pages/SelectDatePage.js';
import DoctorPage from './pages/DoctorPage';
import SpecialtyPage from './pages/SpecialtyPage';
import axios from 'axios';

function App() {
  axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/select-patient" element={<SelectPatientPage />} />
        <Route path="/select-doctor" element={<SelectDoctorPage />} />
        <Route path="/select-date" element={<SelectDatePage />} />
        <Route path="/doctors" element={<DoctorPage />} />
        <Route path="/specialties" element={<SpecialtyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
