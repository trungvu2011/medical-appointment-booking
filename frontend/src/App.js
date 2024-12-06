import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import RecordPage from './pages/RecordPage';
import DoctorPage from './pages/DoctorPage';
import SpecialtyPage from './pages/SpecialtyPage';
import EditPage from './pages/EditPage';
import axios from 'axios';

function App() {
  axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/record" element={<RecordPage />} />
        <Route path="/doctors" element={<DoctorPage />} />
        <Route path="/specialties" element={<SpecialtyPage />} />
        <Route path="/edit" element={<EditPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
